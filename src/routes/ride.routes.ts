import { Router } from "express";
import { z } from "zod";
import { PrismaClient, Prisma, RideStatus } from "../generated/prisma/index.js";
import { requireAuth } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = Router();

const rideCreateSchema = z.object({
  start_location: z.string().min(1),
  end_location: z.string().min(1),
  start_date: z.string(),
  start_time: z.string(),
  total_fare: z.number().positive(),
  vehicle_type: z.enum(['car', 'suv', 'auto']),
  max_passengers: z.number().int().min(1).max(6)
});

router.post("/", requireAuth, async (req, res, next) => {
  try {
    const data = rideCreateSchema.parse(req.body);
    
    // Create or update vehicle for the user
    let vehicle = await prisma.vehicle.findUnique({
      where: { user_id: req.auth!.userId }
    });

    if (vehicle) {
      vehicle = await prisma.vehicle.update({
        where: { user_id: req.auth!.userId },
        data: { vehicle_type: data.vehicle_type }
      });
    } else {
      vehicle = await prisma.vehicle.create({
        data: {
          user_id: req.auth!.userId,
          vehicle_type: data.vehicle_type
        }
      });
    }

    // Create ride with max_passengers and vehicle
    const ride = await prisma.ride.create({
      data: {
        driver_id: req.auth!.userId,
        vehicle_id: vehicle.vehicle_id,
        start_location: data.start_location,
        end_location: data.end_location,
        start_date: new Date(data.start_date),
        start_time: new Date(data.start_time),
        total_fare: data.total_fare,
        max_passengers: data.max_passengers
      },
      include: {
        driver: {
          select: {
            name: true,
            rating: true
          }
        },
        vehicle: true,
        participants: true
      }
    });
    res.status(201).json(ride);
  } catch (err) {
    next(err);
  }
});

const joinSchema = z.object({ ride_id: z.string() });

router.post("/join", requireAuth, async (req, res, next) => {
  try {
    const { ride_id } = joinSchema.parse(req.body);
    const ride = await prisma.ride.findUnique({ 
      where: { ride_id }, 
      include: { 
        participants: true,
        driver: true  // Include driver info to check if it's the user's own ride
      } 
    });
    
    if (!ride) return res.status(404).json({ error: "RideNotFound" });
    if (ride.status !== "open") return res.status(400).json({ error: "RideNotOpen" });
    
    // Check if user is trying to book their own ride
    if (ride.driver_id === req.auth!.userId) {
      return res.status(400).json({ error: "Cannot book your own ride" });
    }

    // Check if user already has an active booking for any ride
    const active = await prisma.rideParticipant.findFirst({
      where: {
        user_id: req.auth!.userId,
        status: "booked",
        ride: { 
          status: { in: ["open", "booked"] },
          start_date: { gte: new Date() }
        },
      },
    });
    if (active) return res.status(400).json({ error: "You already have an active booking for another ride" });

    // Capacity check: include host in headcount
    const bookedCount = ride.participants.filter(p => p.status === "booked").length;
    const currentHeadcount = bookedCount + 1; // host counts as rider
    if (currentHeadcount >= ride.max_passengers) {
      return res.status(400).json({ error: "RideFull" });
    }

    // Dynamic fare splitting per current headcount + this new user
    const newHeadcount = currentHeadcount + 1;
    const share = Number(ride.total_fare) / newHeadcount;

    // Upsert participation (unique on ride_id+user_id)
    const existing = await prisma.rideParticipant.findUnique({
      where: { ride_id_user_id: { ride_id: ride.ride_id, user_id: req.auth!.userId } }
    });

    let participant;
    if (existing) {
      if (existing.status === "booked") {
        return res.status(400).json({ error: "AlreadyBooked" });
      }
      participant = await prisma.rideParticipant.update({
        where: { id: existing.id },
        data: { status: "booked", share_fare: share }
      });
    } else {
      participant = await prisma.rideParticipant.create({
        data: { ride_id: ride.ride_id, user_id: req.auth!.userId, share_fare: share },
      });
    }

    res.status(201).json(participant);
  } catch (err) {
    next(err);
  }
});

router.get("/search", requireAuth, async (req, res, next) => {
  try {
    const { start, end, date } = req.query as Record<string, string>;

    const now = new Date();
    now.setSeconds(0);
    now.setMilliseconds(0);

    const searchDate = date ? new Date(date) : now;
    searchDate.setHours(0, 0, 0, 0); // Normalize to start of the day for date comparison

    const rides = await prisma.ride.findMany({
      where: {
        status: "open",
        ...(start ? { start_location: { contains: start, mode: "insensitive" } } : {}),
        ...(end ? { end_location: { contains: end, mode: "insensitive" } } : {}),
        // Filter for rides that start in the future or today after the current time
        start_date: { gte: searchDate },
        AND: {
          OR: [
            { start_date: { gt: searchDate } }, // Rides on future dates
            {
              start_date: searchDate, // Rides on today's date
              start_time: { gte: now } // Only show if start_time is greater than or equal to current time
            }
          ]
        }
      },
      include: {
        driver: {
          select: {
            name: true,
            rating: true,
            phone: true
          }
        },
        vehicle: true,
        participants: {
          include: {
            user: {
              select: {
                name: true,
                rating: true
              }
            }
          },
          where: {
            status: "booked"
          }
        }
      },
      orderBy: { start_date: "asc" },
    });
    res.json(rides);
  } catch (err) {
    next(err);
  }
});

const transitionSchema = z.object({ ride_id: z.string() });

// Start ride (host only)
router.post("/start", requireAuth, async (req, res, next) => {
  try {
    const { ride_id } = transitionSchema.parse(req.body);
    const ride = await prisma.ride.findUnique({ where: { ride_id } });
    if (!ride) return res.status(404).json({ error: "RideNotFound" });
    if (ride.driver_id !== req.auth!.userId) return res.status(403).json({ error: "NotRideOwner" });
    if (ride.status !== "open") return res.status(400).json({ error: "InvalidState" });

    const now = new Date();
    const rideStartDateTime = new Date(
      ride.start_date.getFullYear(),
      ride.start_date.getMonth(),
      ride.start_date.getDate(),
      ride.start_time.getHours(),
      ride.start_time.getMinutes(),
      ride.start_time.getSeconds(),
      ride.start_time.getMilliseconds()
    );

    if (now < rideStartDateTime) {
      return res.status(400).json({ error: "Can't start before start time" });
    }

    const updated = await prisma.ride.update({ where: { ride_id }, data: { status: RideStatus.active } });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// Complete ride (host only)
router.post("/complete", requireAuth, async (req, res, next) => {
  try {
    const { ride_id } = transitionSchema.parse(req.body);
    const ride = await prisma.ride.findUnique({ where: { ride_id } });
    if (!ride) return res.status(404).json({ error: "RideNotFound" });
    if (ride.driver_id !== req.auth!.userId) return res.status(403).json({ error: "NotRideOwner" });
    if (ride.status !== RideStatus.active) return res.status(400).json({ error: "InvalidState" });

    const updated = await prisma.ride.update({ where: { ride_id }, data: { status: RideStatus.completed } });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

const cancelSchema = z.object({ ride_id: z.string() });

router.post("/cancel", requireAuth, async (req, res, next) => {
  try {
    const { ride_id } = cancelSchema.parse(req.body);
    const rp = await prisma.rideParticipant.findUnique({ where: { ride_id_user_id: { ride_id, user_id: req.auth!.userId } }, include: { ride: true } });
    
    // If user is not a participant, check if they are the driver (creator) of this ride
    if (!rp) {
      const ride = await prisma.ride.findUnique({ where: { ride_id }, include: { participants: { where: { status: "booked" }, orderBy: { booking_time: "asc" } } } });
      if (!ride) return res.status(404).json({ error: "RideNotFound" });
      // Driver is cancelling their own created ride
      if (ride.driver_id !== req.auth!.userId) return res.status(403).json({ error: "NotRideOwner" });

      const now = new Date();
      const startDateTime = new Date(ride.start_date);
      startDateTime.setHours(new Date(ride.start_time).getHours(), new Date(ride.start_time).getMinutes());
      const diffMs = startDateTime.getTime() - now.getTime();
      const diffHours = diffMs / (1000 * 60 * 60);
      const penalty = diffHours < 3 ? 5 : 2;

      await prisma.$transaction(async (tx) => {
        // Log driver cancellation
        await tx.rideCancellation.create({
          data: {
            ride_id,
            user_id: req.auth!.userId,
            cancelled_at: now
          }
        });

        // Increment driver's cancellation metrics
        await tx.user.update({
          where: { user_id: req.auth!.userId },
          data: {
            cancellation_count: { increment: 1 },
            credibility_score: { decrement: penalty }
          }
        });

        // If there are booked participants, promote the earliest to driver
        const firstBooked = ride.participants[0];
        if (firstBooked) {
          // Promote participant to driver and remove their participant record
          await tx.ride.update({
            where: { ride_id },
            data: {
              driver_id: firstBooked.user_id,
              status: "open"
            }
          });
          await tx.rideParticipant.delete({ where: { id: firstBooked.id } });
        } else {
          // No participants booked: cancel the ride
          await tx.ride.update({ where: { ride_id }, data: { status: "cancelled" } });
        }
      });

      return res.json({ cancelled: true, driver_cancelled: true, transferred: Boolean(ride.participants[0]) });
    }

    const now = new Date();
    const startDateTime = new Date(rp.ride.start_date);
    // Align time fields if needed
    startDateTime.setHours(new Date(rp.ride.start_time).getHours(), new Date(rp.ride.start_time).getMinutes());
    const diffMs = startDateTime.getTime() - now.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);

    let penalty = 0;
    if (diffHours < 3) {
      // penalty proportional to fare share
      penalty = Math.max(0, Math.round(Number(rp.share_fare) * 0.25));
    }

    // Record the cancellation
    await prisma.$transaction(async (tx) => {
      // mark participation as cancelled
      await tx.rideParticipant.update({ 
        where: { id: rp.id }, 
        data: { status: "cancelled" } 
      });

      // write cancellation log
      await tx.rideCancellation.create({
        data: {
          ride_id,
          user_id: req.auth!.userId,
          cancelled_at: now
        }
      });

      // if no booked participants remain, reopen the ride
      const remaining = await tx.rideParticipant.count({
        where: { ride_id, status: "booked" }
      });
      if (remaining === 0) {
        await tx.ride.update({ where: { ride_id }, data: { status: "open" } });
      }

      // apply user penalty/metrics once
      await tx.user.update({
        where: { user_id: req.auth!.userId },
        data: { 
          cancellation_count: { increment: 1 },
          credibility_score: { decrement: penalty > 0 ? 5 : 2 }
        }
      });
    });

    res.json({ cancelled: true, penalty });
  } catch (err) {
    next(err);
  }
});

// Current user's rides (hosted and joined upcoming)
router.get("/mine", requireAuth, async (req, res, next) => {
  try {
    const userId = req.auth!.userId;
    
    const now = new Date();
    now.setSeconds(0);
    now.setMilliseconds(0);

    // Get hosted rides with full details
    const hosted = await prisma.ride.findMany({
      where: { 
        driver_id: userId,
        NOT: { status: "cancelled" },  // Exclude cancelled rides
        // Filter for rides that start in the future or today after the current time
        // OR: [
        //   { start_date: { gt: now } }, // Rides on future dates
        //   {
        //     start_date: now, // Rides on today's date
        //     start_time: { gte: now } // Only show if start_time is greater than or equal to current time
        //   }
        // ]
      },
      include: {
        vehicle: true,
        participants: {
          include: {
            user: {
              select: {
                name: true,
                rating: true
              }
            }
          }
        }
      },
      orderBy: [
        { status: "asc" },  // Show active rides first
        { start_date: "asc" }
      ],
    });

    // Get joined rides with full details
    const joined = await prisma.rideParticipant.findMany({
      where: {
        user_id: userId,
        status: { in: ["booked"] }, // exclude cancelled participation
        ride: {
          NOT: { status: "cancelled" },
          // Filter for rides that start in the future or today after the current time
          OR: [
            { start_date: { gt: now } }, // Rides on future dates
            {
              start_date: now, // Rides on today's date
              start_time: { gte: now } // Only show if start_time is greater than or equal to current time
            }
          ]
        }
      },
      include: {
        ride: {
          include: {
            driver: {
              select: {
                name: true,
                rating: true
              }
            },
            vehicle: true,
            participants: {
              include: {
                user: {
                  select: {
                    name: true,
                    rating: true
                  }
                }
              }
            }
          }
        }
      },
      orderBy: [
        { status: "asc" },  // Show booked rides first
        { booking_time: "desc" }
      ],
    });

    res.json({ 
      hosted, 
      joined: joined.map(j => ({
        ...j.ride,
        participation_status: j.status  // Include the user's participation status
      }))
    });
  } catch (err) {
    next(err);
  }
});

// Ride details
router.get("/:id", requireAuth, async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "RideIdRequired" });
    }
    
    const ride = await prisma.ride.findUnique({
      where: { ride_id: id },
      include: {
        driver: { select: { name: true, email: true } },
        vehicle: true,
        participants: { include: { user: { select: { name: true } } } },
      },
    });
    if (!ride) return res.status(404).json({ error: "RideNotFound" });
    res.json(ride);
  } catch (err) {
    next(err);
  }
});

export default router;


import { Router } from "express";
import { z } from "zod";
import { PrismaClient } from "../generated/prisma/index.js";
import { requireAuth } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = Router();

const rideCreateSchema = z.object({
  start_location: z.string().min(1),
  end_location: z.string().min(1),
  start_date: z.string(),
  start_time: z.string(),
  total_fare: z.number().positive(),
  vehicle_id: z.string().optional(),
  capacity: z.number().int().min(1).max(6).default(3),
});

router.post("/", requireAuth, async (req, res, next) => {
  try {
    const data = rideCreateSchema.parse(req.body);
    // Ensure host has a vehicle or a fallback is allowed
    if (!data.vehicle_id) {
      // allow fallback hired cab by leaving vehicle null
    } else {
      const v = await prisma.vehicle.findUnique({ where: { vehicle_id: data.vehicle_id } });
      if (!v) return res.status(400).json({ error: "VehicleNotFound" });
      if (v.user_id !== req.auth!.userId) return res.status(403).json({ error: "NotVehicleOwner" });
    }

    // Create ride; capacity is managed by allowed participants count via share calc
    const ride = await prisma.ride.create({
      data: {
        driver_id: req.auth!.userId,
        vehicle_id: data.vehicle_id ?? null,
        start_location: data.start_location,
        end_location: data.end_location,
        start_date: new Date(data.start_date),
        start_time: new Date(data.start_time),
        total_fare: data.total_fare,
      },
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
    const ride = await prisma.ride.findUnique({ where: { ride_id }, include: { participants: true } });
    if (!ride) return res.status(404).json({ error: "RideNotFound" });
    if (ride.status !== "open") return res.status(400).json({ error: "RideNotOpen" });

    // One-ride-at-a-time rule for user
    const active = await prisma.rideParticipant.findFirst({
      where: {
        user_id: req.auth!.userId,
        status: { in: ["booked"] },
        ride: { status: { in: ["open", "booked"] } },
      },
    });
    if (active) return res.status(400).json({ error: "AlreadyInActiveRide" });

    // Dynamic fare splitting: equal split among driver + participants? Here: split among participants only
    const participantCount = ride.participants.filter(p => p.status === "booked").length + 1; // include this user
    const share = Number(ride.total_fare) / participantCount;

    const participant = await prisma.rideParticipant.create({
      data: { ride_id: ride.ride_id, user_id: req.auth!.userId, share_fare: share },
    });
    res.status(201).json(participant);
  } catch (err) {
    next(err);
  }
});

router.get("/search", requireAuth, async (req, res, next) => {
  try {
    const { start, end, date } = req.query as Record<string, string>;
    const rides = await prisma.ride.findMany({
      where: {
        status: "open",
        ...(start ? { start_location: { contains: start, mode: "insensitive" } } : {}),
        ...(end ? { end_location: { contains: end, mode: "insensitive" } } : {}),
        ...(date ? { start_date: { gte: new Date(date) } } : {}),
      },
      orderBy: { start_date: "asc" },
    });
    res.json(rides);
  } catch (err) {
    next(err);
  }
});

const cancelSchema = z.object({ ride_id: z.string() });

router.post("/cancel", requireAuth, async (req, res, next) => {
  try {
    const { ride_id } = cancelSchema.parse(req.body);
    const rp = await prisma.rideParticipant.findUnique({ where: { ride_id_user_id: { ride_id, user_id: req.auth!.userId } }, include: { ride: true } });
    if (!rp) return res.status(404).json({ error: "NotParticipant" });

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
      await prisma.user.update({
        where: { user_id: req.auth!.userId },
        data: { cancellation_count: { increment: 1 }, credibility_score: { decrement: 5 } },
      });
    }

    await prisma.rideParticipant.update({ where: { id: rp.id }, data: { status: "cancelled" } });
    res.json({ cancelled: true, penalty });
  } catch (err) {
    next(err);
  }
});

// Current user's rides (hosted and joined upcoming)
router.get("/mine", requireAuth, async (req, res, next) => {
  try {
    const userId = req.auth!.userId;
    const hosted = await prisma.ride.findMany({
      where: { driver_id: userId },
      orderBy: { start_date: "asc" },
    });
    const joined = await prisma.rideParticipant.findMany({
      where: { user_id: userId, status: { in: ["booked"] } },
      include: { ride: true },
      orderBy: { booking_time: "desc" },
    });
    res.json({ hosted, joined: joined.map(j => j.ride) });
  } catch (err) {
    next(err);
  }
});

// Ride details
router.get("/:id", requireAuth, async (req, res, next) => {
  try {
    const ride = await prisma.ride.findUnique({
      where: { ride_id: req.params.id },
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


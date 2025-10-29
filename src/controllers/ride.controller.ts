import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/prisma/index.js";
import { z } from "zod";

const prisma = new PrismaClient();

export class RideController {
  static async createRide(req: Request, res: Response, next: NextFunction) {
    try {
      const rideCreateSchema = z.object({
        start_location: z.string().min(1),
        end_location: z.string().min(1),
        start_date: z.string(),
        start_time: z.string(),
        total_fare: z.number().positive(),
        vehicle_id: z.string().optional(),
        capacity: z.number().int().min(1).max(6).default(3),
      });

      const data = rideCreateSchema.parse(req.body);
      
      // Ensure host has a vehicle or allow fallback hired cab
      if (data.vehicle_id) {
        const vehicle = await prisma.vehicle.findUnique({ 
          where: { vehicle_id: data.vehicle_id } 
        });
        if (!vehicle) {
          return res.status(400).json({ error: "VehicleNotFound" });
        }
        if (vehicle.user_id !== req.auth!.userId) {
          return res.status(403).json({ error: "NotVehicleOwner" });
        }
      }

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
  }

  static async searchRides(req: Request, res: Response, next: NextFunction) {
    try {
      const { start, end, date } = req.query as Record<string, string>;
      
      const rides = await prisma.ride.findMany({
        where: {
          status: "open",
          ...(start ? { start_location: { contains: start, mode: "insensitive" } } : {}),
          ...(end ? { end_location: { contains: end, mode: "insensitive" } } : {}),
          ...(date ? { start_date: { gte: new Date(date) } } : {}),
        },
        include: {
          driver: { select: { name: true, rating: true, credibility_score: true } },
          vehicle: { select: { vehicle_type: true } },
          participants: { 
            where: { status: "booked" },
            include: { user: { select: { name: true } } }
          }
        },
        orderBy: { start_date: "asc" },
      });

      res.json(rides);
    } catch (err) {
      next(err);
    }
  }

  static async getRideDetails(req: Request, res: Response, next: NextFunction) {
    try {
      const { rideId } = req.params;
      
      const ride = await prisma.ride.findUnique({
        where: { ride_id: rideId },
        include: {
          driver: { select: { name: true, email: true, rating: true, credibility_score: true } },
          vehicle: { select: { vehicle_type: true } },
          participants: {
            include: { user: { select: { name: true, email: true, rating: true } } }
          }
        }
      });

      if (!ride) {
        return res.status(404).json({ error: "RideNotFound" });
      }

      res.json(ride);
    } catch (err) {
      next(err);
    }
  }
}

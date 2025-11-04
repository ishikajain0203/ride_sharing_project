import { Router } from "express";
import { z } from "zod";
import { PrismaClient } from "../generated/prisma/index.js";
import { requireAuth } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = Router();

const sosSchema = z.object({ ride_id: z.string(), location_at_trigger: z.string() });

router.post("/trigger", requireAuth, async (req, res, next) => {
  try {
    const { ride_id, location_at_trigger } = sosSchema.parse(req.body);
    const ride = await prisma.ride.findUnique({ where: { ride_id }, include: { participants: true } });
    if (!ride) return res.status(404).json({ error: "RideNotFound" });

    const sos = await prisma.sOS_Log.create({
      data: { ride_id, trigger_user_id: req.auth!.userId, location_at_trigger },
    });
    // attach involved users
    const involved = [ride.driver_id, ...ride.participants.map(p => p.user_id)];
    await prisma.sOS_Involved.createMany({ data: involved.map(u => ({ sos_id: sos.sos_id, user_id: u })) });
    res.status(201).json({ sos_id: sos.sos_id, status: sos.status });
  } catch (err) {
    next(err);
  }
});

export default router;


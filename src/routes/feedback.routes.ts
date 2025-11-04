import { Router } from "express";
import { z } from "zod";
import { PrismaClient } from "../generated/prisma/index.js";
import { requireAuth } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = Router();

const feedbackSchema = z.object({
  ride_id: z.string(),
  receiver_id: z.string(),
  rating: z.number().int().min(1).max(5),
  comfort_flag: z.enum(["comfortable", "uncomfortable"]),
  comments: z.string().optional(),
});

router.post("/", requireAuth, async (req, res, next) => {
  try {
    const { ride_id, receiver_id, rating, comfort_flag, comments } = feedbackSchema.parse(req.body);
    if (receiver_id === req.auth!.userId) return res.status(400).json({ error: "CannotSelfReview" });
    // ensure both users were in the same ride
    const participation = await prisma.rideParticipant.findMany({ where: { ride_id, user_id: { in: [req.auth!.userId, receiver_id] } } });
    if (participation.length < 1) return res.status(400).json({ error: "NotInRide" });

    const fb = await prisma.feedback.create({ data: { ride_id, giver_id: req.auth!.userId, receiver_id, rating, comfort_flag, comments } });

    // adjust receiver credibility
    const delta = rating <= 2 || comfort_flag === "uncomfortable" ? -3 : 1;
    await prisma.user.update({ where: { user_id: receiver_id }, data: { credibility_score: { increment: delta } } });

    res.status(201).json(fb);
  } catch (err) {
    next(err);
  }
});

export default router;


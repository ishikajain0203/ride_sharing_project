import { Router } from "express";
import { z } from "zod";
import QRCode from "qrcode";
import { PrismaClient } from "../generated/prisma/index.js";
import { requireAuth } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = Router();

const initSchema = z.object({ ride_id: z.string() });

router.post("/init", requireAuth, async (req, res, next) => {
  try {
    const { ride_id } = initSchema.parse(req.body);
    const rp = await prisma.rideParticipant.findUnique({ where: { ride_id_user_id: { ride_id, user_id: req.auth!.userId } }, include: { ride: true } });
    if (!rp) return res.status(404).json({ error: "NotParticipant" });
    const upiString = `upi://pay?pa=ride@upi&pn=JKLU%20Ride&am=${rp.share_fare}&tn=Ride%20${ride_id}`;
    const qr = await QRCode.toDataURL(upiString);
    res.json({ upi: upiString, qr });
  } catch (err) {
    next(err);
  }
});

const confirmSchema = z.object({ ride_id: z.string(), amount: z.number().positive() });

router.post("/confirm", requireAuth, async (req, res, next) => {
  try {
    const { ride_id, amount } = confirmSchema.parse(req.body);
    const rp = await prisma.rideParticipant.findUnique({ where: { ride_id_user_id: { ride_id, user_id: req.auth!.userId } } });
    if (!rp) return res.status(404).json({ error: "NotParticipant" });
    // Record payment (Note: in production, verify via payment gateway webhook)
    const payment = await prisma.payment.upsert({
      where: { ride_id_payer_id: { ride_id, payer_id: req.auth!.userId } },
      update: { amount },
      create: { ride_id, payer_id: req.auth!.userId, amount },
    });
    res.json(payment);
  } catch (err) {
    next(err);
  }
});

export default router;


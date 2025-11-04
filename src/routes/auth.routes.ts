import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { env } from "../utils/env.js";
import { requireAuth } from "../middleware/auth.js";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();
const router = Router();

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  password: z.string().min(8),
});

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, phone, password } = registerSchema.parse(req.body);
    if (!email.endsWith(env.EMAIL_DOMAIN)) return res.status(400).json({ error: "InvalidEmailDomain" });
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return res.status(409).json({ error: "EmailExists" });
    const password_hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({ 
      data: { 
        name, 
        email, 
        phone: phone || null, 
        password_hash 
      } 
    });
    res.status(201).json({ user_id: user.user_id, email: user.email });
  } catch (err) {
    next(err);
  }
});

const loginSchema = z.object({ email: z.string().email(), password: z.string() });

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "InvalidCredentials" });
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: "InvalidCredentials" });
    if (!email.endsWith(env.EMAIL_DOMAIN)) return res.status(403).json({ error: "ForbiddenDomain" });
    const token = jwt.sign({ userId: user.user_id, role: user.role, email: user.email }, env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

router.get("/me", requireAuth, async (req, res, next) => {
  try {
    const [user, rideStats] = await Promise.all([
      prisma.user.findUnique({
        where: { user_id: req.auth!.userId },
        select: {
          user_id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          credibility_score: true,
          rating: true,
          cancellation_count: true,
          created_at: true,
        },
      }),
      prisma.$transaction(async (tx) => {
        const hosted = await tx.ride.count({
          where: { driver_id: req.auth!.userId },
        });

        const joined = await tx.rideParticipant.count({
          where: { 
            user_id: req.auth!.userId,
            status: "completed"
          },
        });

        const cancellations = await tx.rideCancellation.count({
          where: { user_id: req.auth!.userId },
        });

        return {
          ridesHosted: hosted,
          ridesJoined: joined,
          cancellationCount: cancellations,
          totalRides: hosted + joined
        };
      })
    ]);

    if (!user) return res.status(404).json({ error: "UserNotFound" });
    
    res.json({
      ...user,
      ...rideStats
    });
  } catch (err) {
    next(err);
  }
});

const updateProfileSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional(),
});

router.patch("/profile", requireAuth, async (req, res, next) => {
  try {
    const { name, phone } = updateProfileSchema.parse(req.body);
    
    const user = await prisma.user.update({
      where: { user_id: req.auth!.userId },
      data: { 
        name,
        phone: phone || null
      },
      select: {
        user_id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        credibility_score: true,
        rating: true,
        cancellation_count: true,
        created_at: true,
      }
    });

    res.json(user);
  } catch (err) {
    next(err);
  }
});

export default router;


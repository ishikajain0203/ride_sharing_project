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
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, phone, password } = registerSchema.parse(req.body);
    
    // Validate email domain
    if (!email.endsWith(env.EMAIL_DOMAIN)) {
      return res.status(400).json({ 
        error: "InvalidEmailDomain", 
        message: `Only ${env.EMAIL_DOMAIN} emails are allowed` 
      });
    }
    
    // Check if user already exists
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return res.status(409).json({ 
        error: "EmailExists", 
        message: "An account with this email already exists" 
      });
    }
    
    // Hash password and create user
    const password_hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({ 
      data: { name, email, phone, password_hash } 
    });
    
    // Generate JWT token for immediate login
    const token = jwt.sign(
      { userId: user.user_id, role: user.role, email: user.email }, 
      env.JWT_SECRET, 
      { expiresIn: "7d" }
    );
    
    res.status(201).json({ 
      message: "Account created successfully",
      user: {
        user_id: user.user_id, 
        email: user.email,
        name: user.name,
        role: user.role
      },
      token 
    });
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
    const user = await prisma.user.findUnique({
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
    });
    if (!user) return res.status(404).json({ error: "UserNotFound" });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

export default router;


import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../utils/env.js";

export interface AuthPayload {
  userId: string;
  role: "student" | "committee_admin";
  email: string;
}

declare module "express-serve-static-core" {
  interface Request {
    auth?: AuthPayload;
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) return res.status(401).json({ error: "Unauthorized" });
  const token = header.slice("Bearer ".length);
  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as AuthPayload;
    if (!payload.email.endsWith(env.EMAIL_DOMAIN)) {
      return res.status(403).json({ error: "Forbidden", message: "Email domain not allowed" });
    }
    req.auth = payload;
    next();
  } catch {
    return res.status(401).json({ error: "Unauthorized" });
  }
}

export function requireCommittee(req: Request, res: Response, next: NextFunction) {
  if (!req.auth) return res.status(401).json({ error: "Unauthorized" });
  if (req.auth.role !== "committee_admin") return res.status(403).json({ error: "Forbidden" });
  next();
}


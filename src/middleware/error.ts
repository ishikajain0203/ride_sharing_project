import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { logger } from "../utils/logger.js";

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  // Handle malformed JSON bodies from express.json()
  if (err instanceof SyntaxError) {
    return res.status(400).json({ error: "BadRequest", message: "Invalid JSON payload" });
  }
  if (err instanceof ZodError) {
    return res.status(400).json({ error: "ValidationError", issues: err.flatten() });
  }
  const message = err instanceof Error ? err.message : "Internal Server Error";
  logger.error({ err }, message);
  res.status(500).json({ error: "InternalServerError", message });
}


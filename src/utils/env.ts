import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.string().default("4000"),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(16, "JWT_SECRET should be at least 16 characters"),
  EMAIL_DOMAIN: z.string().default("@jklu.edu.in"),
  DATA_RETENTION_MONTHS: z.string().default("6"),
});

export const env = envSchema.parse(process.env);


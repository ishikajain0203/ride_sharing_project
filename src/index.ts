import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./utils/env.js";
import { logger } from "./utils/logger.js";
import { errorHandler } from "./middleware/error.js";
import authRoutes from "./routes/auth.routes.js";
import rideRoutes from "./routes/ride.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import feedbackRoutes from "./routes/feedback.routes.js";
import sosRoutes from "./routes/sos.routes.js";
import committeeRoutes from "./routes/committee.routes.js";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ 
    message: "JKLU Ride-Sharing API", 
    version: "1.0.0",
    status: "running",
    endpoints: {
      auth: "/api/auth",
      rides: "/api/rides", 
      payments: "/api/payments",
      feedback: "/api/feedback",
      sos: "/api/sos",
      committee: "/api/committee"
    }
  });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, env: env.NODE_ENV });
});

app.get("/test", (_req, res) => {
  res.json({ 
    message: "API is working!",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/rides", rideRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/sos", sosRoutes);
app.use("/api/committee", committeeRoutes);

app.use(errorHandler);

app.listen(Number(env.PORT), () => {
  logger.info(`Server listening on http://localhost:${env.PORT}`);
});


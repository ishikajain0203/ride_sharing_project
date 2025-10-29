import { Request, Response, NextFunction } from "express";
import { PaymentService } from "../services/payment.service.js";
import { z } from "zod";

export class PaymentController {
  static async generateUPIQR(req: Request, res: Response, next: NextFunction) {
    try {
      const initSchema = z.object({ ride_id: z.string() });
      const { ride_id } = initSchema.parse(req.body);
      
      // Get participant's share fare
      const { PrismaClient } = await import("../generated/prisma/index.js");
      const prisma = new PrismaClient();
      
      const participant = await prisma.rideParticipant.findUnique({
        where: { ride_id_user_id: { ride_id, user_id: req.auth!.userId } }
      });
      
      if (!participant) {
        return res.status(404).json({ error: "NotParticipant" });
      }

      const { upi, qr } = await PaymentService.generateUPIQR(ride_id, Number(participant.share_fare));
      res.json({ upi, qr, amount: participant.share_fare });
    } catch (err) {
      next(err);
    }
  }

  static async confirmPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const confirmSchema = z.object({ 
        ride_id: z.string(), 
        amount: z.number().positive() 
      });
      const { ride_id, amount } = confirmSchema.parse(req.body);
      
      const payment = await PaymentService.recordPayment(ride_id, req.auth!.userId, amount);
      res.json(payment);
    } catch (err) {
      next(err);
    }
  }

  static async getPaymentHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const payments = await PaymentService.getPaymentHistory(req.auth!.userId);
      res.json(payments);
    } catch (err) {
      next(err);
    }
  }
}

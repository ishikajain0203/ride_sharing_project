import { PrismaClient } from "../generated/prisma/index.js";
import QRCode from "qrcode";

const prisma = new PrismaClient();

export class PaymentService {
  static async generateUPIQR(rideId: string, amount: number): Promise<{ upi: string; qr: string }> {
    const upiString = `upi://pay?pa=ride@upi&pn=JKLU%20Ride&am=${amount}&tn=Ride%20${rideId}`;
    const qr = await QRCode.toDataURL(upiString);
    return { upi: upiString, qr };
  }

  static async recordPayment(rideId: string, payerId: string, amount: number) {
    return await prisma.payment.upsert({
      where: { ride_id_payer_id: { ride_id: rideId, payer_id: payerId } },
      update: { amount },
      create: { ride_id: rideId, payer_id: payerId, amount },
    });
  }

  static async getPaymentHistory(userId: string) {
    return await prisma.payment.findMany({
      where: { payer_id: userId },
      include: { ride: true },
      orderBy: { paid_at: "desc" },
    });
  }
}

import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export class SOSService {
  static async triggerSOS(rideId: string, triggerUserId: string, location: string) {
    const ride = await prisma.ride.findUnique({
      where: { ride_id: rideId },
      include: { participants: true }
    });

    if (!ride) {
      throw new Error("RideNotFound");
    }

    const sos = await prisma.sOS_Log.create({
      data: { ride_id: rideId, trigger_user_id: triggerUserId, location_at_trigger: location }
    });

    // Attach involved users (driver + participants)
    const involved = [ride.driver_id, ...ride.participants.map(p => p.user_id)];
    await prisma.sOS_Involved.createMany({
      data: involved.map(userId => ({ sos_id: sos.sos_id, user_id: userId }))
    });

    return sos;
  }

  static async getSOSLogs(status?: string) {
    return await prisma.sOS_Log.findMany({
      where: status ? { status } : {},
      include: {
        involved_users: { include: { user: { select: { name: true, email: true } } } },
        trigger_user: { select: { name: true, email: true } },
        ride: { select: { start_location: true, end_location: true, start_date: true } }
      },
      orderBy: { trigger_time: "desc" }
    });
  }

  static async updateSOSStatus(sosId: string, status: string) {
    return await prisma.sOS_Log.update({
      where: { sos_id: sosId },
      data: { status }
    });
  }
}

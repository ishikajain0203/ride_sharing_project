import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export interface RideStats {
  totalRides: number;
  ridesHosted: number;
  ridesJoined: number;
  cancellationCount: number;
}

export async function getUserRideStats(userId: string): Promise<RideStats> {
  // Get hosted rides
  const hostedRides = await prisma.ride.count({
    where: {
      host_id: userId,
    }
  });

  // Get joined rides
  const joinedRides = await prisma.rideParticipant.count({
    where: {
      user_id: userId,
    }
  });

  // Get cancellation count
  const cancellations = await prisma.rideCancellation.count({
    where: {
      user_id: userId,
    }
  });

  return {
    totalRides: hostedRides + joinedRides,
    ridesHosted: hostedRides,
    ridesJoined: joinedRides,
    cancellationCount: cancellations
  };
}

export async function updateRideCancellation(userId: string, rideId: string) {
  // Record cancellation
  await prisma.rideCancellation.create({
    data: {
      user_id: userId,
      ride_id: rideId,
      cancelled_at: new Date()
    }
  });

  // Update user's cancellation count
  await prisma.user.update({
    where: { user_id: userId },
    data: {
      cancellation_count: {
        increment: 1
      }
    }
  });
}

export async function getRideParticipants(rideId: string) {
  return prisma.rideParticipant.findMany({
    where: {
      ride_id: rideId
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          phone: true,
          rating: true
        }
      }
    }
  });
}


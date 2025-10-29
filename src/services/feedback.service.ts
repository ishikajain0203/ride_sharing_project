import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export class FeedbackService {
  static async submitFeedback(
    rideId: string,
    giverId: string,
    receiverId: string,
    rating: number,
    comfortFlag: "comfortable" | "uncomfortable",
    comments?: string
  ) {
    // Ensure both users were in the same ride
    const participation = await prisma.rideParticipant.findMany({
      where: { ride_id: rideId, user_id: { in: [giverId, receiverId] } }
    });
    
    if (participation.length < 1) {
      throw new Error("NotInRide");
    }

    const feedback = await prisma.feedback.create({
      data: { ride_id: rideId, giver_id: giverId, receiver_id: receiverId, rating, comfort_flag: comfortFlag, comments }
    });

    // Adjust receiver credibility
    const delta = rating <= 2 || comfortFlag === "uncomfortable" ? -3 : 1;
    await prisma.user.update({
      where: { user_id: receiverId },
      data: { credibility_score: { increment: delta } }
    });

    return feedback;
  }

  static async getUserFeedback(userId: string) {
    return await prisma.feedback.findMany({
      where: { receiver_id: userId },
      include: { giver: { select: { name: true, email: true } } },
      orderBy: { created_at: "desc" }
    });
  }

  static async calculateUserRating(userId: string): Promise<number> {
    const feedbacks = await prisma.feedback.findMany({
      where: { receiver_id: userId },
      select: { rating: true }
    });

    if (feedbacks.length === 0) return 0;
    
    const totalRating = feedbacks.reduce((sum, fb) => sum + fb.rating, 0);
    return totalRating / feedbacks.length;
  }
}

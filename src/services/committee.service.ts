import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export class CommitteeService {
  static async createAction(
    sosId: string | null,
    userId: string,
    actionType: "warning" | "penalty" | "ban" | "feedback_review",
    notes?: string
  ) {
    const action = await prisma.committee_Action.create({
      data: { sos_id: sosId, user_id: userId, action_type: actionType, notes }
    });

    // Apply credibility penalties based on action type
    if (actionType === "penalty") {
      await prisma.user.update({
        where: { user_id: userId },
        data: { credibility_score: { decrement: 5 } }
      });
    } else if (actionType === "ban") {
      await prisma.user.update({
        where: { user_id: userId },
        data: { credibility_score: { decrement: 100 } }
      });
    }

    return action;
  }

  static async getCommitteeActions(userId?: string) {
    return await prisma.committee_Action.findMany({
      where: userId ? { user_id: userId } : {},
      include: {
        user: { select: { name: true, email: true, credibility_score: true } },
        sos: { include: { ride: { select: { start_location: true, end_location: true } } } }
      },
      orderBy: { action_date: "desc" }
    });
  }

  static async getUsersWithLowCredibility(threshold: number = 50) {
    return await prisma.user.findMany({
      where: { credibility_score: { lt: threshold } },
      select: {
        user_id: true,
        name: true,
        email: true,
        credibility_score: true,
        cancellation_count: true,
        rating: true
      },
      orderBy: { credibility_score: "asc" }
    });
  }

  static async getWeeklySOSReport() {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return await prisma.sOS_Log.findMany({
      where: { trigger_time: { gte: oneWeekAgo } },
      include: {
        trigger_user: { select: { name: true, email: true } },
        ride: { select: { start_location: true, end_location: true, start_date: true } }
      },
      orderBy: { trigger_time: "desc" }
    });
  }
}

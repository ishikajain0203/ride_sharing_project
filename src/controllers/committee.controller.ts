import { Request, Response, NextFunction } from "express";
import { CommitteeService } from "../services/committee.service.js";
import { z } from "zod";

export class CommitteeController {
  static async createAction(req: Request, res: Response, next: NextFunction) {
    try {
      const actionSchema = z.object({
        sos_id: z.string().nullable().optional(),
        user_id: z.string(),
        action_type: z.enum(["warning", "penalty", "ban", "feedback_review"]),
        notes: z.string().optional()
      });

      const { sos_id, user_id, action_type, notes } = actionSchema.parse(req.body);
      
      const action = await CommitteeService.createAction(sos_id, user_id, action_type, notes);
      res.status(201).json(action);
    } catch (err) {
      next(err);
    }
  }

  static async getCommitteeActions(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.query as { userId?: string };
      const actions = await CommitteeService.getCommitteeActions(userId);
      res.json(actions);
    } catch (err) {
      next(err);
    }
  }

  static async getUsersWithLowCredibility(req: Request, res: Response, next: NextFunction) {
    try {
      const { threshold } = req.query as { threshold?: string };
      const users = await CommitteeService.getUsersWithLowCredibility(
        threshold ? parseInt(threshold) : 50
      );
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  static async getWeeklySOSReport(req: Request, res: Response, next: NextFunction) {
    try {
      const report = await CommitteeService.getWeeklySOSReport();
      res.json(report);
    } catch (err) {
      next(err);
    }
  }
}

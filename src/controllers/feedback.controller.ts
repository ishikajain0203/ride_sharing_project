import { Request, Response, NextFunction } from "express";
import { FeedbackService } from "../services/feedback.service.js";
import { z } from "zod";

export class FeedbackController {
  static async submitFeedback(req: Request, res: Response, next: NextFunction) {
    try {
      const feedbackSchema = z.object({
        ride_id: z.string(),
        receiver_id: z.string(),
        rating: z.number().int().min(1).max(5),
        comfort_flag: z.enum(["comfortable", "uncomfortable"]),
        comments: z.string().optional(),
      });

      const { ride_id, receiver_id, rating, comfort_flag, comments } = feedbackSchema.parse(req.body);
      
      if (receiver_id === req.auth!.userId) {
        return res.status(400).json({ error: "CannotSelfReview" });
      }

      const feedback = await FeedbackService.submitFeedback(
        ride_id,
        req.auth!.userId,
        receiver_id,
        rating,
        comfort_flag,
        comments
      );

      res.status(201).json(feedback);
    } catch (err) {
      next(err);
    }
  }

  static async getUserFeedback(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const feedbacks = await FeedbackService.getUserFeedback(userId);
      res.json(feedbacks);
    } catch (err) {
      next(err);
    }
  }

  static async getMyFeedback(req: Request, res: Response, next: NextFunction) {
    try {
      const feedbacks = await FeedbackService.getUserFeedback(req.auth!.userId);
      res.json(feedbacks);
    } catch (err) {
      next(err);
    }
  }
}

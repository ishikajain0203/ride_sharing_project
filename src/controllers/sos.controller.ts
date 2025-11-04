import { Request, Response, NextFunction } from "express";
import { SOSService } from "../services/sos.service.js";
import { z } from "zod";

export class SOSController {
  static async triggerSOS(req: Request, res: Response, next: NextFunction) {
    try {
      const sosSchema = z.object({ 
        ride_id: z.string(), 
        location_at_trigger: z.string() 
      });
      const { ride_id, location_at_trigger } = sosSchema.parse(req.body);
      
      const sos = await SOSService.triggerSOS(ride_id, req.auth!.userId, location_at_trigger);
      res.status(201).json({ sos_id: sos.sos_id, status: sos.status });
    } catch (err) {
      next(err);
    }
  }

  static async getSOSLogs(req: Request, res: Response, next: NextFunction) {
    try {
      const { status } = req.query as { status?: string };
      const logs = await SOSService.getSOSLogs(status);
      res.json(logs);
    } catch (err) {
      next(err);
    }
  }

  static async updateSOSStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { sosId } = req.params;
      const { status } = req.body;
      
      const updated = await SOSService.updateSOSStatus(sosId, status);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  }
}

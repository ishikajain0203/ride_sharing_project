import { Router } from "express";
import { z } from "zod";
import { PrismaClient } from "../generated/prisma/index.js";
import { requireAuth, requireCommittee } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = Router();

router.use(requireAuth, requireCommittee);

router.get("/sos", async (_req, res, next) => {
  try {
    const sos = await prisma.sOS_Log.findMany({ include: { involved_users: true } });
    res.json(sos);
  } catch (err) { next(err); }
});

const actionSchema = z.object({ sos_id: z.string().nullable().optional(), user_id: z.string(), action_type: z.enum(["warning","penalty","ban","feedback_review"]), notes: z.string().optional() });

router.post("/actions", async (req, res, next) => {
  try {
    const { sos_id, user_id, action_type, notes } = actionSchema.parse(req.body);
    const action = await prisma.committee_Action.create({ data: { sos_id: sos_id ?? null, user_id, action_type, notes } });
    if (action_type === "penalty") {
      await prisma.user.update({ where: { user_id }, data: { credibility_score: { decrement: 5 } } });
    }
    if (action_type === "ban") {
      await prisma.user.update({ where: { user_id }, data: { credibility_score: { decrement: 100 } } });
    }
    res.status(201).json(action);
  } catch (err) { next(err); }
});

export default router;


import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../generated/prisma/client.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

// Update profile endpoint
router.patch('/profile', authMiddleware, async (req, res) => {
  try {
    const updateSchema = z.object({
      name: z.string().min(2),
      phone: z.string().regex(/^\+?[\d\s-]+$/).optional(),
    });

    const { name, phone } = updateSchema.parse(req.body);
    const userId = req.user?.user_id;

    const updatedUser = await prisma.user.update({
      where: { user_id: userId },
      data: {
        name,
        phone: phone || null,
        updated_at: new Date(),
      },
      select: {
        name: true,
        email: true,
        phone: true,
        role: true,
        created_at: true,
        rating: true,
        credibility_score: true,
        cancellation_count: true,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        error: 'ValidationError',
        message: 'Invalid input data',
        details: error.issues 
      });
      return;
    }
    
    console.error('Profile update error:', error);
    res.status(500).json({ 
      error: 'InternalServerError',
      message: 'Failed to update profile' 
    });
  }
});

export default router;
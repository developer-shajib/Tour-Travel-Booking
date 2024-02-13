import express from 'express';
import { createReview } from '../controllers/reviewController.js';
import { verifyUser } from '../middleware/verifyToken.js';

const router = express.Router();

router.route('/:tourId').post(verifyUser, createReview);

export default router;

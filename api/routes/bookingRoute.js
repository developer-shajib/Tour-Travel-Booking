import express from 'express';
import { verifyAdmin, verifyUser } from '../middleware/verifyToken.js';
import { createBooking, getAllBooking, getSingleBooking } from '../controllers/bookingController.js';

// init router
const router = express.Router();

router.route('/').get(verifyUser, getAllBooking).post(verifyUser, createBooking);
router.route('/:id').get(verifyAdmin, getSingleBooking);

export default router;
 
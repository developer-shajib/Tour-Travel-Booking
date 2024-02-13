import express from 'express';
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourCount,
  getTourSearch,
  updateTour,
} from '../controllers/tourController.js';
import { verifyAdmin } from '../middleware/verifyToken.js';

const router = express.Router();

//  Tour Router
router.route('/').get(getAllTour).post(verifyAdmin, createTour);
router
  .route('/:id')
  .get(getSingleTour)
  .delete(verifyAdmin, deleteTour)
  .put(verifyAdmin, updateTour)
  .patch(verifyAdmin, updateTour);

// Get Tour By Search
router.route('/search/getTourBySearch').get(getTourSearch);
// Get Tour By Feature
router.route('/search/getFeaturedTours').get(getFeaturedTour);
// Get Tour Count
router.route('/search/getTourCount').get(getTourCount);

export default router;

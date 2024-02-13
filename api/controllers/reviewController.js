import expressAsyncHandler from 'express-async-handler';
import Tour from '../models/Tour.js';
import Review from '../models/Review.js';

// Create Review
export const createReview = expressAsyncHandler(async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  const saveReview = await newReview.save();

  // after creating a new review now update the review array of the tour
  const reviewUpdate = await Tour.findByIdAndUpdate(tourId, { $push: { reviews: saveReview._id } });

  if (!reviewUpdate) return res.status(500).json({ success: false, message: 'Failed to submit' });

  res.status(200).json({ success: true, message: 'Review submitted', data: saveReview });
});

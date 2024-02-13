import Tour from '../models/Tour.js';
import asyncHandler from 'express-async-handler';

/**
 * @desc Get all Tour
 * @name GET /
 * @access public
 */
export const getAllTour = asyncHandler(async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  const tours = await Tour.find()
    .populate('reviews')
    .skip(page * 8)
    .limit(8);

  res.status(200).json({ success: true, message: 'Successful', count: tours.length, data: tours });
});

/**
 * @desc Create Tour
 * @name POST /
 * @access public
 */
export const createTour = asyncHandler(async (req, res) => {
  const newTour = new Tour(req.body);
  const saveTour = await newTour.save();

  // check data validate
  if (!saveTour) return res.status(500).json({ success: false, message: 'Failed to create. Try again' });

  // Send  Data to client
  res.status(200).json({ success: true, message: 'Successfully Created', data: saveTour });
});

/**
 * @desc Update Tour
 * @name PUT/PATCH /:id
 * @access public
 */
export const updateTour = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedTour = await Tour.findByIdAndUpdate(id, { ...req.body }, { new: true });

  // if not update
  if (!updatedTour) return res.status(500).json({ success: false, message: 'Failed to update. Try again' });

  res.status(200).json({ success: true, message: 'Tour updated successful', data: updatedTour });
});

/**
 * @desc Delete Tour
 * @name DELETE /:id
 * @access public
 */
export const deleteTour = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleteTour = await Tour.findByIdAndDelete(id);

  // if not delete
  if (!deleteTour) return res.status(500).json({ success: false, message: 'Failed to delete. Try again' });

  res.status(200).json({ success: true, message: 'Tour deleted successful', data: deleteTour });
});

/**
 * @desc Get Single Tour
 * @name GET /:id
 * @access public
 */
export const getSingleTour = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const tour = await Tour.findById(id).populate('reviews');

  // if not find
  if (!tour) return res.status(404).json({ success: false, message: 'Tour not found!' });

  res.status(200).json({ success: true, message: 'Successful', data: tour });
});

/**
 * @desc Search Tours
 * @name GET /search/getTourBySearch?key=value
 * @access public
 */
export const getTourSearch = asyncHandler(async (req, res) => {
  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, 'i');
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  const tours = await Tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate(
    'reviews'
  );

  // if not find
  if (!tours) return res.status(404).json({ success: false, message: 'Not found!', data: tours });

  res.status(200).json({ success: true, message: 'Successful', data: tours });
});

/**
 * @desc Get Feature tour
 * @name GET /search/getFeaturedTours
 * @access public
 */
export const getFeaturedTour = asyncHandler(async (req, res) => {
  const tours = await Tour.find({ featured: true }).populate('reviews').limit(8);

  if (!tours) return res.status(404).json({ success: false, message: 'Not found!' });

  res.status(200).json({ success: true, message: 'Successful', data: tours });
});

/**
 * @desc Get Tour counts
 * @name GET /search/getTourCount
 * @access public
 */
export const getTourCount = asyncHandler(async (req, res) => {
  const tourCount = await Tour.estimatedDocumentCount();

  if (!tourCount) return res.status(500).json({ success: false, message: 'Failed to fetch!' });

  res.status(200).json({ success: true, message: 'Successful', data: tourCount });
});

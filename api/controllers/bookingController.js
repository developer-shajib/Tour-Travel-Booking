import expressAsyncHandler from 'express-async-handler';
import Booking from '../models/Booking.js';

/**
 * @desc Get All Booking
 * @name GET /
 * @access private
 */
export const getAllBooking = expressAsyncHandler(async (req, res) => {
  const booking = await Booking.find();

  if (!booking) return res.status(404).json({ success: false, message: 'Not Found' });

  res.status(200).json({ success: false, message: 'Successful', data: booking });
});

/**
 * @desc Create new Tour Booking
 * @name POST /
 * @access private
 */
export const createBooking = expressAsyncHandler(async (req, res) => {
  const newBooking = new Booking(req.body);

  const saveBooking = await newBooking.save();

  if (!saveBooking) return res.status(500).json({ success: false, message: 'Internal server error' });

  res.status(200).json({ success: true, message: 'Your tour is booked', data: saveBooking });
});

/**
 * @desc Get Single Booking
 * @name GET /:id
 * @access private
 */
export const getSingleBooking = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  const booking = await Booking.findById(id);

  if (!booking) return res.status(404).json({ success: false, message: 'Not Found' });

  res.status(200).json({ success: false, message: 'Successful', data: booking });
});

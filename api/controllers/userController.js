import User from '../models/User.js';
import asyncHandler from 'express-async-handler';

/**
 * @desc Get all User
 * @name GET /
 * @access public
 */
export const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json({ success: true, message: 'Successful', data: users });
});

/**
 * @desc Create User
 * @name POST /
 * @access public
 */
export const createUser = asyncHandler(async (req, res) => {
  const newUser = new User(req.body);
  const saveUser = await newUser.save();

  // check data validate
  if (!saveUser) return res.status(500).json({ success: false, message: 'Failed to create. Try again' });

  // Send  Data to client
  res.status(200).json({ success: true, message: 'Successfully Created', data: saveUser });
});

/**
 * @desc Update User
 * @name PUT/PATCH /:id
 * @access public
 */
export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedUser = await User.findByIdAndUpdate(id, { ...req.body }, { new: true });

  // if not update
  if (!updatedUser) return res.status(500).json({ success: false, message: 'Failed to update. Try again' });

  res.status(200).json({ success: true, message: 'User updated successful', data: updatedUser });
});

/**
 * @desc Delete User
 * @name DELETE /:id
 * @access public
 */
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleteUser = await User.findByIdAndDelete(id);

  // if not delete
  if (!deleteUser) return res.status(500).json({ success: false, message: 'Failed to delete. Try again' });

  res.status(200).json({ success: true, message: 'User deleted successful', data: deleteUser });
});

/**
 * @desc Get Single User
 * @name GET /:id
 * @access public
 */
export const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  // if not find
  if (!user) return res.status(404).json({ success: false, message: 'User not found!' });

  res.status(200).json({ success: true, message: 'Successful', data: user });
});

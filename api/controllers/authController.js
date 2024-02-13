import expressAsyncHandler from 'express-async-handler';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { checkPassword, createHash } from '../utils/createhash.js';

/**
 * @desc Create a user
 * @name POST /register
 * @access public
 */
export const register = expressAsyncHandler(async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: createHash(req.body.password),
    photo: req.body.photo
  });

  const user = await newUser.save();

  if (!user) return res.status(500).json({ success: false, message: 'Failed to create' });

  res.status(200).json({ success: true, message: 'Successful', data: user });
});

/**
 * @desc Login user
 * @name POST /login
 * @access public
 */
export const login = expressAsyncHandler(async (req, res) => {
  // email validate check
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ success: false, message: 'User not found!' });

  // password validate check
  const passwordCheck = checkPassword(req.body.password, user.password);

  if (!passwordCheck) return res.status(500).json({ success: false, message: 'Wrong password. Try again' });

  const { password, role, ...rest } = user._doc;

  // Create jwt token
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15d' });

  // set token in the browser cookie and send response to the client
  res
    .status(200)
    // .cookie('aToken', token, {
    //   httpOnly: true,
    //   expires: token.expiresIn,
    // })
    .json({ success: true, message: 'Successfully login', token, data: { ...rest, role } });
});

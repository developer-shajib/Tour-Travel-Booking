import express from 'express';
import { login, register } from '../controllers/authController.js';

// init route
const router = express.Router();

// Create Router

router.route('/login').post(login);
router.route('/register').post(register);

export default router;

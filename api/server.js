import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { mongoConnect } from './config/db.js';
import tourRouter from './routes/tourRoute.js';
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js';
import reviewRouter from './routes/reviews.js';
import bookingRouter from './routes/bookingRoute.js';
import colors from 'colors';
import errorHandler from './middleware/errorHandler.js';
import { corsOptions } from './config/corsOptions.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(cookieParser());

// Tour Route
app.use('/api/v1/tours', tourRouter);
// User Route
app.use('/api/v1/users', userRouter);
// Auth Route
app.use('/api/v1/auth', authRouter);
// Review Route
app.use('/api/v1/review', reviewRouter);
// Review Route
app.use('/api/v1/booking', bookingRouter);

// Error Handler
app.use(errorHandler);

// Create Server listener
app.listen(PORT, () => {
  mongoConnect();
  console.log(`Server is running on port ${PORT}`.bgBlue.black);
});

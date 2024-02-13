import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    tourName: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookingAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Booking', bookingSchema);

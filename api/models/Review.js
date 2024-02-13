import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: 'Tour',
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    reviewText: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Review', reviewSchema);

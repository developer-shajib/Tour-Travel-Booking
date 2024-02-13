import mongoose from 'mongoose';

const tourSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    distance: {
      type: Number,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      default: null,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
      trim: true,
    },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Review',
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Tour', tourSchema);

import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },

    photo: {
      type: String,
      default: null,
    },

    role: {
      type: String,
      default: 'user',
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);

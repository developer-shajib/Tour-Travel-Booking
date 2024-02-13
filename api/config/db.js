import mongoose from 'mongoose';

// Database Connect
export const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongodb Connect Successful'.bgBlue.black);
  } catch (error) {
    console.log(error.message);
  }
};

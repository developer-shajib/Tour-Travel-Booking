// Cross Configure
export const corsOptions = {
  origin: [
    'http://localhost:5050',
    'http://localhost:5173',
    'http://localhost:3000',
    'https://tours-and-travel-booking.vercel.app',
    'https://tours-and-travels-booking.netlify.app',
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

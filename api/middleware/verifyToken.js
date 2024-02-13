import expressAsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

// Token verify
export const verifyToken = expressAsyncHandler(async (req, res, next) => {
  const authHeader = req?.headers?.authorization || req?.headers?.Authorization;
  if (!authHeader) return res.status(400).json({ message: 'Unauthorized' });
  const token = authHeader?.split(' ')[1];

  // const token = req.cookies.aToken;

  if (!token) return res.status(400).json({ success: false, message: 'Unauthorized' });

  // Token verify
  jwt.verify(token, process.env.JWT_SECRET, (error, resolve) => {
    if (error) return res.status(401).json({ success: false, message: 'Token is invalid' });

    req.user = resolve;
    next();
  });
});

// verify User
export const verifyUser = expressAsyncHandler(async (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === 'admin') {
      next();
    } else {
      return res.status(401).json({ success: false, message: 'You are not authenticated' });
    }
  });
});

// verify User
export const verifyAdmin = expressAsyncHandler(async (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === 'admin') {
      next();
    } else {
      return res.status(401).json({ success: false, message: 'You are not authorize' });
    }
  });
});

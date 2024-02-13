import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../middleware/verifyToken.js';

const router = express.Router();

//  User Router
router.route('/').get(verifyAdmin, getAllUser);
router
  .route('/:id')
  .get(verifyUser, getSingleUser)
  .delete(verifyUser, deleteUser)
  .put(verifyUser, updateUser)
  .patch(verifyUser, updateUser);

export default router;

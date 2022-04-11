import { Router } from 'express';
import authMiddleware from '../app/middlewares/auth.middleware.js';
import UserAddressController from '../app/controllers/UserAddressController.js';

const userAddressRouter = Router();
const userAddressController = new UserAddressController();

userAddressRouter.get(
  '/info/address',
  authMiddleware,
  userAddressController.index,
);
userAddressRouter.post(
  '/info/address',
  authMiddleware,
  userAddressController.store,
);

export default userAddressRouter;

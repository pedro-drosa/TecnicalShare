import { Router } from 'express';
import UserController from '../app/controllers/UserController.js';
import AddressController from '../app/controllers/AddressController.js';

const userController = new UserController();
const addressController = new AddressController();

const userRouter = Router();

userRouter.get('/', userController.index);
userRouter.get('/:id', userController.show);
userRouter.post('/', userController.store);
userRouter.get('/:id/addresses', addressController.index);
userRouter.post('/:id/addresses', addressController.store);

export default userRouter;

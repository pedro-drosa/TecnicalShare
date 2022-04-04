import { Router } from 'express';
import UserController from '../app/controllers/userController.js';

const userController = new UserController();

const userRouter = Router();

userRouter.get('/', userController.index);
userRouter.post('/', userController.store);

export default userRouter;

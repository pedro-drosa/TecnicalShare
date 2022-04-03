import { Router } from 'express';
import UserController from '../app/controllers/userController.js';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/', userController.store);

export default userRouter;

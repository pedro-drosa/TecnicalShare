import { Router } from 'express';
import UserController from '../app/controllers/UserController.js';

const userController = new UserController();

const userRouter = Router();

userRouter.get('/', userController.index);
userRouter.get('/:id', userController.show);
userRouter.post('/', userController.store);

export default userRouter;

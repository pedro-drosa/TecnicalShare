import { Router } from 'express';
import authMiddleware from '../app/middlewares/auth.middleware.js';

import UserController from '../app/controllers/UserController.js';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/', userController.store);

userRouter.get('/', authMiddleware, userController.index);
userRouter.get('/:id', authMiddleware, userController.show);

export default userRouter;

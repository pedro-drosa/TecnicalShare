import { Router } from 'express';
import UserTagController from '../app/controllers/UserTagController.js';
import authMiddleware from '../app/middlewares/auth.middleware.js';

const userTagsRouter = Router();
const userTagController = new UserTagController();

userTagsRouter.get('/info/tags', authMiddleware, userTagController.index);
userTagsRouter.post('/info/tags', authMiddleware, userTagController.store);

export default userTagsRouter;

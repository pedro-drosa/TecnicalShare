import { Router } from 'express';
import authMiddleware from '../app/middlewares/auth.middleware.js';
import UserLevelController from '../app/controllers/UserLevelController.js';

const userLevelRouter = Router();
const userlevelController = new UserLevelController();

userLevelRouter.get('/info/level', authMiddleware, userlevelController.index);
userLevelRouter.post('/info/level', authMiddleware, userlevelController.store);

export default userLevelRouter;

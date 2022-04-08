import { Router } from 'express';
import LevelController from '../app/controllers/LevelController.js';
import authMiddleware from '../app/middlewares/auth.middleware.js';

const levelRouter = Router();
const levelController = new LevelController();

levelRouter.get('/', authMiddleware, levelController.index);
levelRouter.post('/', authMiddleware, levelController.store);

export default levelRouter;

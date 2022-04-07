import { Router } from 'express';
import LevelController from '../app/controllers/LevelController.js';

const levelRouter = Router();
const levelController = new LevelController();

levelRouter.get('/:id/level', levelController.index);
levelRouter.post('/:id/level', levelController.store);

export default levelRouter;

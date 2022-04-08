import { Router } from 'express';
import TagController from '../app/controllers/TagController.js';

import authMiddleware from '../app/middlewares/auth.middleware.js';

const tagRouter = Router();
const tagController = new TagController();

tagRouter.get('/', authMiddleware, tagController.index);
tagRouter.post('/', authMiddleware, tagController.store);

export default tagRouter;

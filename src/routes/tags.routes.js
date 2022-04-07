import { Router } from 'express';
import TagController from '../app/controllers/TagController.js';

const tagRouter = Router();
const tagController = new TagController();

tagRouter.get('/:id/tags', tagController.index);
tagRouter.post('/:id/tags', tagController.store);

export default tagRouter;

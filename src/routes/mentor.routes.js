import { Router } from 'express';
import MentorController from '../app/controllers/MentorController.js';
import authMiddleware from '../app/middlewares/auth.middleware.js';

const mentorRouter = Router();
const mentorController = new MentorController();

mentorRouter.get('/', authMiddleware, mentorController.index);

export default mentorRouter;

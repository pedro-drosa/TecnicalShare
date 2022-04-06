import { Router } from 'express';
import MentorController from '../app/controllers/MentorController.js';

const mentorRouter = Router();
const mentorController = new MentorController();

mentorRouter.get('/', mentorController.index);

export default mentorRouter;

import { Router } from 'express';
import MentorController from '../app/controllers/MentorController.js';
import MentorMonthAvailabilityController from '../app/controllers/MentorMonthAvailabilityController.js';
import authMiddleware from '../app/middlewares/auth.middleware.js';

const mentorRouter = Router();
const mentorController = new MentorController();

// eslint-disable-next-line operator-linebreak
const mentorMonthAvailabilityController =
  new MentorMonthAvailabilityController();

mentorRouter.get('/', authMiddleware, mentorController.index);
mentorRouter.get(
  '/:id/month-availability',
  authMiddleware,
  mentorMonthAvailabilityController.index,
);

export default mentorRouter;

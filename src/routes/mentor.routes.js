import { Router } from 'express';
import MentorController from '../app/controllers/MentorController.js';
import MentorMonthAvailabilityController from '../app/controllers/MentorMonthAvailabilityController.js';
import MentorDayAvailabilityController from '../app/controllers/MentorDayAvailabilityController.js';
import authMiddleware from '../app/middlewares/auth.middleware.js';

const mentorRouter = Router();
const mentorController = new MentorController();

// eslint-disable-next-line operator-linebreak
const mentorMonthAvailabilityController =
  new MentorMonthAvailabilityController();

const mentorDayAvailabilityController = new MentorDayAvailabilityController();

mentorRouter.get('/', authMiddleware, mentorController.index);
mentorRouter.get(
  '/:id/month-availability',
  authMiddleware,
  mentorMonthAvailabilityController.index,
);
mentorRouter.get(
  '/:id/day-availability',
  authMiddleware,
  mentorDayAvailabilityController.index,
);

export default mentorRouter;

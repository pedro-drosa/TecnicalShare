import { Router } from 'express';
import ScheduleController from '../app/controllers/ScheduleController.js';
import authMiddleware from '../app/middlewares/auth.middleware.js';

const scheduleRouter = Router();
const scheduleController = new ScheduleController();

scheduleRouter.get('/', authMiddleware, scheduleController.index);

export default scheduleRouter;

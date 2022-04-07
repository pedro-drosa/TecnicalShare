import { Router } from 'express';
import ScheduleController from '../app/controllers/ScheduleController.js';

const scheduleRouter = Router();
const scheduleController = new ScheduleController();

scheduleRouter.get('/:id', scheduleController.index);

export default scheduleRouter;

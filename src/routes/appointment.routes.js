import { Router } from 'express';
import AppointmentController from '../app/controllers/AppointmentController.js';
import authMiddleware from '../app/middlewares/auth.middleware.js';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.get('/', authMiddleware, appointmentController.index);
appointmentRouter.post('/', authMiddleware, appointmentController.store);

export default appointmentRouter;

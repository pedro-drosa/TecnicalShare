import { Router } from 'express';
import AppointmentController from '../app/controllers/AppointmentController.js';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.post('/:id/appointments', appointmentController.store);

export default appointmentRouter;

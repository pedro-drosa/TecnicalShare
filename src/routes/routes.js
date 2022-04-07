import { Router } from 'express';
import userRouter from './user.routes.js';
import addressRouter from './address.routes.js';
import tagRouter from './tags.routes.js';
import levelRouter from './level.routes.js';
import mentorRouter from './mentor.routes.js';
import appointmentRouter from './appointment.routes.js';
import scheduleRouter from './schedule.routes.js';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/users', addressRouter);
routes.use('/users', tagRouter);
routes.use('/users', levelRouter);
routes.use('/users', appointmentRouter);
routes.use('/mentors', mentorRouter);
routes.use('/schedules', scheduleRouter);

export default routes;

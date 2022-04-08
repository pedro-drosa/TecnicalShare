import { Router } from 'express';
import userRouter from './user.routes.js';
import addressRouter from './address.routes.js';
import tagRouter from './tags.routes.js';
import levelRouter from './level.routes.js';
import mentorRouter from './mentor.routes.js';
import appointmentRouter from './appointment.routes.js';
import scheduleRouter from './schedule.routes.js';
import sessionsRouter from './sessions.routes.js';

const routes = Router();

// probably i will group some routes
// routes.use('/users', appointmentRouter);
// routes.use('/mentors', mentorRouter);
// routes.use('/schedules', scheduleRouter);

routes.use('/users/level', levelRouter);
routes.use('/users/address', addressRouter);
routes.use('/users/tags', tagRouter);
routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);

export default routes;

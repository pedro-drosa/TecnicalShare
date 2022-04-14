import { Router } from 'express';
import sessionsRouter from './sessions.routes.js';
import userRouter from './user.routes.js';
import userTagsRouter from './user_tags.routes.js';
import userAddressRouter from './user_address.routes.js';
import userLevelRouter from './user_level.routes.js';
import matchFilterRouter from './matchFilter.routes.js';

import mentorRouter from './mentor.routes.js';
import appointmentRouter from './appointment.routes.js';
import scheduleRouter from './schedule.routes.js';

const routes = Router();

routes.use('/sessions', sessionsRouter);

routes.use('/users', userRouter);
routes.use('/users', userTagsRouter);
routes.use('/users', userAddressRouter);
routes.use('/users', userLevelRouter);

// I'll probably have to refactor that too
routes.use('/mentors', mentorRouter);

routes.use('/appointments', appointmentRouter);
routes.use('/schedules', scheduleRouter);

routes.use('/match-filter', matchFilterRouter);

export default routes;

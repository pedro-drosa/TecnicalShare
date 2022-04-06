import { Router } from 'express';
import userRouter from './user.routes.js';
import addressRouter from './address.routes.js';
import tagRouter from './tags.routes.js';
import levelRouter from './level.routes.js';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/users', addressRouter);
routes.use('/users', tagRouter);
routes.use('/users', levelRouter);

export default routes;

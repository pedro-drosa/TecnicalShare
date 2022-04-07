import { Router } from 'express';
import SessionController from '../app/controllers/SessionController.js';

const sessionsRouter = Router();
const sessionController = new SessionController();

sessionsRouter.post('/', sessionController.store);

export default sessionsRouter;

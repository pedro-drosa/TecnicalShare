import { Router } from 'express';
import MatchFilterController from '../app/controllers/MatchFilterController.js';
import authMiddleware from '../app/middlewares/auth.middleware.js';

const matchFilterRouter = Router();
const matchFilterController = new MatchFilterController();

matchFilterRouter.get('/', authMiddleware, matchFilterController.index);

export default matchFilterRouter;

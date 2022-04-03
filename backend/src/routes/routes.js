import { Router } from 'express';
import UserController from '../app/controllers/userController.js';

const userController = new UserController();

const routes = Router();
routes.get('/', userController.store);

export default routes;

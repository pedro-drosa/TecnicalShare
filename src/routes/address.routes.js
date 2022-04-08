import { Router } from 'express';
import AddressController from '../app/controllers/AddressController.js';
import authMiddleware from '../app/middlewares/auth.middleware.js';

const addressRouter = Router();
const addressController = new AddressController();

addressRouter.get('/', authMiddleware, addressController.index);
addressRouter.post('/', authMiddleware, addressController.store);

export default addressRouter;

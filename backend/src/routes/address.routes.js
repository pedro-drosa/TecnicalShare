import { Router } from 'express';
import AddressController from '../app/controllers/AddressController.js';

const addressRouter = Router();
const addressController = new AddressController();

addressRouter.get('/:id/addresses', addressController.index);
addressRouter.post('/:id/addresses', addressController.store);

export default addressRouter;

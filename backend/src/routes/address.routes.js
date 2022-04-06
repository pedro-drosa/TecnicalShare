import { Router } from 'express';
import AddressController from '../app/controllers/AddressController.js';

const addressRouter = Router();
const addressController = new AddressController();

addressRouter.get('/:id/address', addressController.index);
addressRouter.post('/:id/address', addressController.store);

export default addressRouter;

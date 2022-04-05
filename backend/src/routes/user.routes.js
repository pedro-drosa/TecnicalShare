import { Router } from 'express';
import UserController from '../app/controllers/UserController.js';
import AddressController from '../app/controllers/AddressController.js';
import TagController from '../app/controllers/TagController.js';

const userController = new UserController();
const addressController = new AddressController();
const tagController = new TagController();

const userRouter = Router();

userRouter.get('/', userController.index);
userRouter.get('/:id', userController.show);
userRouter.post('/', userController.store);

/* Addres: I'll probably separate this into another routes file */
userRouter.get('/:id/addresses', addressController.index);
userRouter.post('/:id/addresses', addressController.store);

/* Tags: I'll probably separate this into another routes file */
userRouter.get('/:id/tags', tagController.index);
userRouter.post('/:id/tags', tagController.store);

export default userRouter;

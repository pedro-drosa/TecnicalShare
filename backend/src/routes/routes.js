import { Router } from 'express';

const routes = Router();
routes.get('/', (req, res) => res.send('Hello Stranger'));

export default routes;

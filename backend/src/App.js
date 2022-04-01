import 'dotenv/config';
import express from 'express';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  // eslint-disable-next-line class-methods-use-this
  routes() {
    // this.server.use(routes);
  }
}

export default new App().server;

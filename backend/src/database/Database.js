import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';

import User from '../app/models/User.js';
import Address from '../app/models/Address.js';
import Tag from '../app/models/Tag.js';

const models = [User, Address, Tag];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models),
    );
  }
}

export default new Database();

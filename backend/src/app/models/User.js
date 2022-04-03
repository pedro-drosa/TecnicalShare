import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        mentor: DataTypes.BOOLEAN,
        biography: DataTypes.TEXT,
      },
      {
        sequelize: connection,
      },
    );
  }
}

export default User;

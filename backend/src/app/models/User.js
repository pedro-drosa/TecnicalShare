import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        occupation_area: DataTypes.STRING,
        genre: DataTypes.STRING,
        birth: DataTypes.DATE,
        biography: DataTypes.TEXT,
      },
      {
        sequelize: connection,
      },
    );
  }
}

export default User;

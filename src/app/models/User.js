import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        occupation_area: DataTypes.STRING,
        genre: DataTypes.STRING,
        birth: DataTypes.DATE,
        biography: DataTypes.TEXT,
        mentor: DataTypes.BOOLEAN,
        portfolio: DataTypes.STRING,
        social: DataTypes.STRING,
      },
      {
        sequelize: connection,
      },
    );
  }

  static associate(models) {
    this.hasOne(models.Address, { foreignKey: 'user_id', as: 'address' });
    this.hasOne(models.Level, { foreignKey: 'user_id', as: 'level' });
    this.belongsToMany(models.Tag, {
      foreignKey: 'user_id',
      through: 'user_tags',
      as: 'tags',
    });
  }
}

export default User;

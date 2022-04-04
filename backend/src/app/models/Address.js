import { Model, DataTypes } from 'sequelize';

class Address extends Model {
  static init(connection) {
    super.init(
      {
        userId: DataTypes.INTEGER,
        zipcode: DataTypes.STRING,
        uf: DataTypes.STRING,
        city: DataTypes.STRING,
      },
      { sequelize: connection },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
  }
}

export default Address;

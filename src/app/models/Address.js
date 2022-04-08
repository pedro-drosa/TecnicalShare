import { Model, DataTypes } from 'sequelize';
import * as yup from 'yup';

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
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }

  static async addressValidation(address) {
    const schema = yup.object().shape({
      zipcode: yup.string().required(),
      uf: yup.string().max(2).min(2).required(),
      city: yup.string().required(),
    });

    if (!(await schema.isValid(address))) {
      return false;
    }

    return true;
  }
}

export default Address;

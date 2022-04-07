import { Model, DataTypes } from 'sequelize';
import * as yup from 'yup';

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

  static async userValidation(user) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
      occupationArea: yup.string().required(),
      genre: yup.string().required(),
      birth: yup.date().required(),
      biography: yup.string(),
      mentor: yup.boolean().optional(),
      portfolio: yup.string(),
      social: yup.string(),
    });

    if (!(await schema.isValid(user))) {
      return false;
    }

    return true;
  }

  static async sessionValidation(email, password) {
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
    });

    if (!(await schema.isValid({ email, password }))) {
      return false;
    }

    return true;
  }
}

export default User;

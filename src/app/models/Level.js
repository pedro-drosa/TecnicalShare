import { Model, DataTypes } from 'sequelize';
import * as yup from 'yup';

class Level extends Model {
  static init(connection) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        level_name: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'levels',
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user_levels' });
  }

  static async levelValidation(levelName) {
    const schema = yup.object().shape({
      levelName: yup.string().required(),
    });

    if (!(await schema.isValid({ levelName }))) {
      return false;
    }

    return true;
  }
}

export default Level;

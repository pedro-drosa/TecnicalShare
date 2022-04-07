import { Model, DataTypes } from 'sequelize';

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
}

export default Level;

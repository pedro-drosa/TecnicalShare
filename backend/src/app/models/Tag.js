import { Model, DataTypes } from 'sequelize';

class Tag extends Model {
  static init(connection) {
    super.init(
      {
        tag_name: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'tags',
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'tag_id',
      through: 'user_tags',
      as: 'users',
    });
  }
}

export default Tag;

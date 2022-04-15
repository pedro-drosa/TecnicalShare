import { Model, DataTypes } from 'sequelize';

class Appointment extends Model {
  static init(connection) {
    super.init(
      {
        date: DataTypes.DATE,
        canceled_at: DataTypes.DATE,
      },
      {
        sequelize: connection,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user_appointment',
    });
    this.belongsTo(models.User, { foreignKey: 'mentor_id', as: 'mentor' });
  }
}

export default Appointment;

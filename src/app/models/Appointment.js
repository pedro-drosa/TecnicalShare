import { Model, DataTypes } from 'sequelize';
import * as yup from 'yup';

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

  static async appointmentValidation(appointment) {
    const schema = yup.object().shape({
      mentorId: yup.number().positive().required(),
      date: yup.date(),
    });

    if (!(await schema.isValid(appointment))) {
      return false;
    }

    return true;
  }
}

export default Appointment;

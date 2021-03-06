import { Op } from 'sequelize';
import { startOfDay, endOfDay, startOfMonth, endOfMonth } from 'date-fns';
import Appointment from '../models/Appointment.js';

class AppointmentRepository {
  createNewAppointment(appointment) {
    const { id, mentorId, requestedDate } = appointment;

    return Appointment.create({
      user_id: id,
      mentor_id: mentorId,
      date: requestedDate,
    });
  }

  makeProviderTimeUnavailable(appointment) {
    const { id, mentorId, requestedDate } = appointment;
    return Appointment.create({
      user_id: mentorId,
      mentor_id: id,
      date: requestedDate,
    });
  }

  findOneAppointment(options) {
    return Appointment.findOne(options);
  }

  findAllAppointments(userId) {
    return Appointment.findAll({
      where: {
        user_id: userId,
        canceled_at: null,
      },
      attributes: ['id', 'date', 'user_id'],
      order: ['date'],
      include: { association: 'mentor', attributes: ['id', 'name', 'email'] },
    });
  }

  findAllAppointmentsByMonth(mentorId, date) {
    return Appointment.findAll({
      where: {
        mentor_id: mentorId,
        date: {
          [Op.between]: [startOfMonth(date), endOfMonth(date)],
        },
      },
    });
  }

  findAllAppointmentsByDate(userId, date) {
    return Appointment.findAll({
      where: {
        mentor_id: userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(date), endOfDay(date)],
        },
      },
      order: ['date'],
    });
  }
}

export default AppointmentRepository;

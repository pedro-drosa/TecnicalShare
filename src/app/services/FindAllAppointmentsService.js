import AppointmentRepository from '../repositories/AppointmentRepository.js';

const appointmentRepository = new AppointmentRepository();

class FindAllAppointmentsService {
  static async execute(userId) {
    const allAppointments = await appointmentRepository.findAllAppointments({
      where: {
        user_id: userId,
        canceled_at: null,
      },
      attributes: ['id', 'date', 'user_id'],
      order: ['date'],
      include: { association: 'mentor', attributes: ['id', 'name', 'email'] },
    });

    if (allAppointments.length < 1) {
      return false;
    }

    if (!allAppointments) {
      throw new Error('Unable to list appointments for this user').message;
    }

    return allAppointments;
  }
}

export default FindAllAppointmentsService;

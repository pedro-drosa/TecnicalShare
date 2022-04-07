import AppointmentRepository from '../repositories/AppointmentRepository.js';

const appointmentRepository = new AppointmentRepository();

class FindAllAppointmentsService {
  static async execute(userId) {
    return appointmentRepository.findAllAppointments({
      where: {
        user_id: userId,
        canceled_at: null,
      },
      attributes: ['id', 'date', 'user_id'],
      order: ['date'],
      include: { association: 'mentor', attributes: ['id', 'name', 'email'] },
    });
  }
}

export default FindAllAppointmentsService;

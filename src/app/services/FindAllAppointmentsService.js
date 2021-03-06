import AppointmentRepository from '../repositories/AppointmentRepository.js';

const appointmentRepository = new AppointmentRepository();

class FindAllAppointmentsService {
  static async execute(userId) {
    const allAppointments = await appointmentRepository.findAllAppointments(
      userId,
    );

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

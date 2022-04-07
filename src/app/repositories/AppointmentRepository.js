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

  findOneAppointment(options) {
    return Appointment.findOne(options);
  }

  findAllAppointments(options) {
    return Appointment.findAll(options);
  }
}

export default AppointmentRepository;

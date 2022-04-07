import Appointment from '../models/Appointment.js';

class AppointmentRepository {
  createNewAppointment(appointment) {
    const { id, mentorId, date } = appointment;
    return Appointment.create({
      user_id: id,
      mentor_id: mentorId,
      date,
    });
  }
}

export default AppointmentRepository;

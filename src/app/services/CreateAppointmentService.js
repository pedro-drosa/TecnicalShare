import UserRepository from '../repositories/UserRepository.js';
import AppointmentRepository from '../repositories/AppointmentRepository.js';

const userRepository = new UserRepository();
const appointmentRepository = new AppointmentRepository();

class CreateAppointmentService {
  static async execute(id, mentorId, date) {
    const IsMentor = await userRepository.findOneUser({
      where: { id: mentorId, mentor: true },
    });

    if (!IsMentor) {
      throw new Error('This user is not available for mentoring').message;
    }

    const appointment = await appointmentRepository.createNewAppointment({
      id,
      mentorId,
      date,
    });

    return appointment;
  }
}

export default CreateAppointmentService;

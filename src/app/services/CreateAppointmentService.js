import { startOfHour, parseISO, isBefore } from 'date-fns';

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
      throw new Error('this user is not available for mentoring').message;
    }

    const requestedDate = startOfHour(parseISO(date));

    if (isBefore(requestedDate, Date.now())) {
      throw new Error('the requested time is no longer available').message;
    }

    const appointmentExists = await appointmentRepository.findOneAppointment({
      where: {
        mentor_id: mentorId,
        canceled_at: null,
        date: requestedDate,
      },
    });

    if (appointmentExists) {
      throw new Error('the requested time is no longer available').message;
    }

    const appointment = await appointmentRepository.createNewAppointment({
      id,
      mentorId,
      requestedDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;

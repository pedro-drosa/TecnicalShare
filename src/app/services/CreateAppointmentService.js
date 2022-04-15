import { startOfHour, parseISO, isBefore, sub } from 'date-fns';
import UserRepository from '../repositories/UserRepository.js';
import AppointmentRepository from '../repositories/AppointmentRepository.js';
import Validate from '../../utils/Validate.js';

const userRepository = new UserRepository();
const appointmentRepository = new AppointmentRepository();

class CreateAppointmentService {
  static async execute(id, mentorId, date) {
    if (id === mentorId) {
      throw new Error('you cannot create a schedule with yourself').message;
    }

    if (!(await Validate.appointmentValidation({ mentorId, date }))) {
      throw new Error('data validation error').message;
    }

    const IsMentor = await userRepository.findOneUser({
      where: { id: mentorId, mentor: true },
    });

    if (!IsMentor) {
      throw new Error('this user is not available for mentoring').message;
    }

    const requestedDate = startOfHour(parseISO(date));

    if (isBefore(requestedDate, Date.now())) {
      throw new Error('you cannot create an appointment on a past date')
        .message;
    }

    const appointmentExists = await appointmentRepository.findOneAppointment({
      where: {
        mentor_id: mentorId,
        canceled_at: null,
        date: sub(requestedDate, { hours: 3 }),
      },
    });

    if (appointmentExists) {
      throw new Error('the requested time is no longer available').message;
    }

    const appointment = await appointmentRepository.createNewAppointment({
      id,
      mentorId,
      requestedDate: sub(requestedDate, { hours: 3 }),
    });

    await appointmentRepository.makeProviderTimeUnavailable({
      id,
      mentorId,
      requestedDate: sub(requestedDate, { hours: 3 }),
    });

    return appointment;
  }
}

export default CreateAppointmentService;

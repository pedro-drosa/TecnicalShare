import { parseISO } from 'date-fns';
import UserRepository from '../repositories/UserRepository.js';
import AppointmentRepository from '../repositories/AppointmentRepository.js';

const userRepository = new UserRepository();
const appointmentRepository = new AppointmentRepository();

class FindAllSchedulesService {
  static async execute(userId, date) {
    const isMentor = await userRepository.findOneUser({
      where: {
        id: userId,
        mentor: true,
      },
    });

    if (!isMentor) {
      throw new Error('the user is not enabled as a mentor').message;
    }

    const parsedDate = parseISO(date);

    const appointments = await appointmentRepository.findAllAppointmentsByDate(
      userId,
      parsedDate,
    );

    return appointments;
  }
}

export default FindAllSchedulesService;

import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

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

    const appointments = await appointmentRepository.findAllAppointments({
      where: {
        mentor_id: userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      onder: ['date'],
    });

    return appointments;
  }
}

export default FindAllSchedulesService;

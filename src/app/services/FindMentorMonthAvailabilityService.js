import { parseISO, getDaysInMonth, getDate, isAfter } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentRepository.js';
import UserRepository from '../repositories/UserRepository.js';

const appointmentRepository = new AppointmentRepository();
const userRepository = new UserRepository();

class FindMentorMonthAvailabilityService {
  static async execute(mentorId, date) {
    const parsedDate = parseISO(date);
    const month = parsedDate.getMonth();
    const year = parsedDate.getFullYear();

    const userExists = await userRepository.findOneUserById(mentorId);

    if (!userExists) {
      throw new Error('no user found, check data and try again').message;
    }

    if (!userExists.mentor) {
      throw new Error(
        "this user is not mentoring enabled, so he doesn't have an agenda",
      ).message;
    }

    const appointments = await appointmentRepository.findAllAppointmentsByMonth(
      mentorId,
      parsedDate,
    );

    const numbersOfDaysInMonth = getDaysInMonth(new Date(year, month));

    const everyDayOfTheMonth = Array.from(
      { length: numbersOfDaysInMonth },
      (value, index) => index + 1,
    );

    const availability = everyDayOfTheMonth.map((day) => {
      const compareDate = new Date(year, month, day, 16, 59, 59);

      const appointmentsInDay = appointments.filter(
        (appointment) => getDate(appointment.date) === day,
      );

      return {
        day,
        available:
          appointmentsInDay.length < 10 && isAfter(compareDate, new Date()),
      };
    });

    return availability;
  }
}

export default FindMentorMonthAvailabilityService;

import { parseISO, getHours, isAfter } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentRepository.js';
import UserRepository from '../repositories/UserRepository.js';
import Validate from '../../utils/Validate.js';

const appointmentRepository = new AppointmentRepository();
const userRepository = new UserRepository();

class FindMentorDayAvailabilityService {
  static async execute(mentorId, date) {
    if (!(await Validate.dateValidation({ date }))) {
      throw new Error(
        'data validation error, check the information and try again',
      ).message;
    }

    const userExists = await userRepository.findOneUserById(mentorId);

    if (!userExists) {
      throw new Error('no user found, check data and try again').message;
    }

    if (!userExists.mentor) {
      throw new Error(
        "this user is not mentoring enabled, so he doesn't have an agenda",
      ).message;
    }

    const parsedDate = parseISO(date);
    const [fullDate] = parsedDate.toISOString().split('T'); // [ '2022-04-12', '12:00:00.000Z' ]

    const appointments = await appointmentRepository.findAllAppointmentsByDate(
      mentorId,
      parsedDate,
    );

    const firstHourOfTheDay = 8;

    const allHoursOfTheDay = Array.from(
      { length: 10 },
      (value, index) => index + firstHourOfTheDay,
    );

    const currentDate = new Date(Date.now());

    const availability = allHoursOfTheDay.map((hour) => {
      const hasAppointmentInHour = appointments.find(
        (appointment) => getHours(appointment.date) === hour,
      );

      const appointmentsDate = `${fullDate}T${String(hour).padStart(
        2,
        0,
      )}:00:00-03:00`;

      return {
        hour: appointmentsDate,
        available:
          !hasAppointmentInHour &&
          isAfter(parseISO(appointmentsDate), currentDate),
      };
    });

    return availability;
  }
}

export default FindMentorDayAvailabilityService;

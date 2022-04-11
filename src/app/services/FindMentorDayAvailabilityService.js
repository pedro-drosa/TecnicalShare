import { parseISO, getHours } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentRepository.js';
import UserRepository from '../repositories/UserRepository.js';

const appointmentRepository = new AppointmentRepository();
const userRepository = new UserRepository();

class FindMentorDayAvailabilityService {
  static async execute(mentorId, date) {
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
    const appointments = await appointmentRepository.findAllAppointmentsByDate(
      mentorId,
      parsedDate,
    );

    const firstHourOfTheDay = 8;

    const allHoursOfTheDay = Array.from(
      { length: 10 },
      (value, index) => index + firstHourOfTheDay,
    );

    const availability = allHoursOfTheDay.map((hour) => {
      const hasAppointmentInHour = appointments.find(
        (appointment) => getHours(appointment.date) === hour,
      );
      return {
        hour,
        available: !hasAppointmentInHour,
      };
    });

    return availability;
  }
}

export default FindMentorDayAvailabilityService;

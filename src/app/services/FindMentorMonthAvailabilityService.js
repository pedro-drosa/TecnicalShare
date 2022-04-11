import { parseISO, getDaysInMonth, getDate } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentRepository.js';

const appointmentRepository = new AppointmentRepository();
// , month, year
class FindMentorMonthAvailabilityService {
  static async execute(mentorId, date) {
    const parsedDate = parseISO(date);
    const month = parsedDate.getMonth();
    const year = parsedDate.getFullYear();

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
      const appointmentsInDay = appointments.filter(
        (appointment) => getDate(appointment.date) === day,
      );

      return {
        day,
        available: appointmentsInDay.length < 10,
      };
    });

    return availability;
  }
}

export default FindMentorMonthAvailabilityService;

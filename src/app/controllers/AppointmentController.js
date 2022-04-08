import CreateAppointmentService from '../services/CreateAppointmentService.js';
import FindAllAppointmentsService from '../services/FindAllAppointmentsService.js';

class AppointmentController {
  async index(req, res) {
    try {
      const appointments = await FindAllAppointmentsService.execute(req.userId);

      if (!appointments) {
        return res.json({
          message: 'this user has no appointments at the moment',
        });
      }

      return res.json(appointments);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async store(req, res) {
    try {
      const { mentorId, date } = req.body;

      const appointment = await CreateAppointmentService.execute(
        req.userId,
        mentorId,
        date,
      );

      return res.json(appointment);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default AppointmentController;

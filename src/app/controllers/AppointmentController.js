import CreateAppointmentService from '../services/CreateAppointmentService.js';
import FindAllAppointmentsService from '../services/FindAllAppointmentsService.js';

class AppointmentController {
  async index(req, res) {
    const { id } = req.params;
    const appointments = await FindAllAppointmentsService.execute(id);

    return res.json(appointments);
  }

  async store(req, res) {
    try {
      const { mentorId, date } = req.body;
      const { id } = req.params;

      const appointment = await CreateAppointmentService.execute(
        id,
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

import FindAllSchedulesService from '../services/FindAllSchedulesService.js';

class ScheduleController {
  async index(req, res) {
    const { id } = req.params;
    const { date } = req.query;
    try {
      const schedule = await FindAllSchedulesService.execute(id, date);
      return res.json({ schedule, date });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default ScheduleController;

import FindAllSchedulesService from '../services/FindAllSchedulesService.js';

class ScheduleController {
  async index(req, res) {
    const { date } = req.query;
    try {
      const schedule = await FindAllSchedulesService.execute(req.userId, date);
      return res.json({ schedule, date });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default ScheduleController;

import FindMentorDayAvailabilityService from '../services/FindMentorDayAvailabilityService.js';

class MentorDayAvailabilityController {
  async index(req, res) {
    try {
      const { id } = req.params;
      const { date } = req.query;
      const hours = await FindMentorDayAvailabilityService.execute(id, date);

      return res.json(hours);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default MentorDayAvailabilityController;

import FindMentorMonthAvailabilityService from '../services/FindMentorMonthAvailabilityService.js';

class MentorMonthAvailabilityController {
  async index(req, res) {
    try {
      const { id } = req.params;
      const { date } = req.query;
      const appointments = await FindMentorMonthAvailabilityService.execute(
        id,
        date,
      );
      return res.json(appointments);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default MentorMonthAvailabilityController;

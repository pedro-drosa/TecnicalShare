import FindMentorMonthAvailabilityService from '../services/FindMentorMonthAvailabilityService.js';

class MentorMonthAvailabilityController {
  async index(req, res) {
    const { id } = req.params;
    const { date } = req.query;
    const appointments = await FindMentorMonthAvailabilityService.execute(
      id,
      date,
    );
    return res.json(appointments);
  }
}

export default MentorMonthAvailabilityController;

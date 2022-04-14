import MatchFilterService from '../services/MatchFilterService.js';

class MatchFilterController {
  async index(req, res) {
    try {
      const { initialDate, finalDate } = req.body;

      const resume = await MatchFilterService.execute(
        req.userId,
        initialDate,
        finalDate,
      );

      if (!resume) {
        return res
          .status(404)
          .json({
            message: 'could not find a mentor, please try a new date or time',
          });
      }

      return res.json(resume);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default MatchFilterController;

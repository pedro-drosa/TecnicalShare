import FindAllMentorsService from '../services/FindAllMentorsService.js';

class MentorController {
  async index(req, res) {
    const mentors = await FindAllMentorsService.execute();

    if (!mentors) return res.status(404).json({ error: 'no mentor found' });

    return res.json(mentors);
  }
}

export default MentorController;

import FindAllMentor from '../services/FindAllMentors.js';

class MentorController {
  async index(req, res) {
    const mentors = await FindAllMentor.execute();

    if (!mentors) return res.status(404).json({ error: 'no mentor found' });

    return res.json(mentors);
  }
}

export default MentorController;

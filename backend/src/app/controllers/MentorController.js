import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class MentorController {
  async index(req, res) {
    const mentors = await userRepository.findAllUsers({
      where: { mentor: true },
      attributes: ['id', 'name', 'email', 'occupation_area', 'genre'],
      include: {
        attributes: ['tag_name'],
        association: 'tags',
        through: { attributes: [] },
      },
    });
    return res.json(mentors);
  }
}

export default MentorController;

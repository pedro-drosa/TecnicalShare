import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class FindAllMentorService {
  static async execute() {
    const mentors = await userRepository.findAllUsers({
      where: { mentor: true },
      attributes: ['id', 'name', 'email', 'occupation_area', 'genre'],
      include: {
        attributes: ['tag_name'],
        association: 'tags',
        through: { attributes: [] },
      },
    });

    if (mentors.length < 1) return null;

    return mentors;
  }
}

export default FindAllMentorService;

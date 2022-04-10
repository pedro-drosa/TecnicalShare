import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class FindAllMentorService {
  static async execute(exceptId) {
    const mentors = await userRepository.findAllMentors(exceptId);

    if (mentors.length < 1) return null;

    return mentors;
  }
}

export default FindAllMentorService;

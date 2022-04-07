import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class FindAllTagsService {
  static async execute(id) {
    const user = await userRepository.findOneUserById(id, {
      include: { association: 'tags' },
    });

    return user;
  }
}

export default FindAllTagsService;

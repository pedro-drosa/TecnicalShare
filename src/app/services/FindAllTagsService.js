import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class FindAllTagsService {
  static async execute(id) {
    const user = await userRepository.findOneUserById(id, {
      include: { association: 'tags' },
    });

    if (!user) throw new Error('error loading this tags').message;

    return user.tags;
  }
}

export default FindAllTagsService;

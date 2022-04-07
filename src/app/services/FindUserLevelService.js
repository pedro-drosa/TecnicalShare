import UserRepository from '../repositories/UserRepository.js';

const userrepository = new UserRepository();

class FindUserLevelService {
  static async execute(id) {
    const userExists = await userrepository.findOneUserById(id, {
      include: { association: 'level' },
    });

    if (!userExists) return false;

    return userExists;
  }
}

export default FindUserLevelService;

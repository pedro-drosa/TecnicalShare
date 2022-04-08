import UserRepository from '../repositories/UserRepository.js';

const userrepository = new UserRepository();

class FindUserLevelService {
  static async execute(id) {
    const userExists = await userrepository.findOneUserById(id, {
      include: { association: 'level' },
    });

    if (!userExists) {
      throw new Error('user not found, check data and try again').message;
    }

    if (!userExists.level) {
      throw new Error('no level registered for this user so far').message;
    }

    return userExists.level;
  }
}

export default FindUserLevelService;

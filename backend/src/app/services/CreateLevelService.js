import UserRepository from '../repositories/UserRepository.js';
import LevelRepository from '../repositories/LevelRepository.js';

const userRepository = new UserRepository();
const levelRepository = new LevelRepository();

class CreateLevelService {
  static async execute(id, levelName) {
    const userExists = await userRepository.findOneUserById(id);

    if (!userExists) return null;

    const level = await levelRepository.createLevel(id, levelName);

    return level;
  }
}

export default CreateLevelService;

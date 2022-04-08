import UserRepository from '../repositories/UserRepository.js';
import LevelRepository from '../repositories/LevelRepository.js';
import Level from '../models/Level.js';

const userRepository = new UserRepository();
const levelRepository = new LevelRepository();

class CreateLevelService {
  static async execute(userId, levelName) {
    const userExists = await userRepository.findOneUserById(userId);

    if (!(await Level.levelValidation({ levelName }))) {
      throw new Error('data validation error').message;
    }

    if (!userExists) {
      throw new Error('user not found, check data and try again').message;
    }

    const newLevel = await levelRepository.createLevel(userId, levelName);

    if (!newLevel) {
      throw new Error('could not assign a level to the user').message;
    }

    return newLevel[0];
  }
}

export default CreateLevelService;

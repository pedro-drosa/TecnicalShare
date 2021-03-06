import UserRepository from '../repositories/UserRepository.js';
import PasswordHash from '../../utils/PasswordHash.js';
import Validate from '../../utils/Validate.js';

const userRepository = new UserRepository();

class CreateUserService {
  static async execute(user) {
    const { email, password } = user;

    if (!(await Validate.userValidation(user))) {
      throw new Error('validation error, check the information and try again')
        .message;
    }

    const userExists = await userRepository.findOneUserByEmail(email);

    if (userExists) {
      throw new Error('This email has already been registered').message;
    }

    const hash = await PasswordHash.generateHash(password);

    const newUser = await userRepository.createUser({ ...user, hash });

    return newUser;
  }
}

export default CreateUserService;

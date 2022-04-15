import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository.js';
import PasswordHash from '../../utils/PasswordHash.js';
import authConfig from '../../config/auth.js';
import Validate from '../../utils/Validate.js';

const userRepository = new UserRepository();

class CreateSessionService {
  static async execute(email, password) {
    if (!(await Validate.sessionValidation(email, password))) {
      throw new Error('validation error, please check the data').message;
    }

    const userExists = await userRepository.findOneUser({
      where: { email },
    });

    if (!userExists) throw new Error('User not found').message;

    const passwordHash = await PasswordHash.compareHash(
      password,
      userExists.password,
    );

    if (!passwordHash) {
      throw new Error('invalid password').message;
    }

    const { id, name } = userExists;

    return {
      user: {
        id,
        name,
      },
      // expiresIn: 86400 equals 1 day
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    };
  }
}

export default CreateSessionService;

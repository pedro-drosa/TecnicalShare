import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class CreateUserService {
  static async execute(user) {
    const { email } = user;
    const userExists = await userRepository.findOneUserByEmail(email);

    if (userExists) return { error: 'This email has already been registered' };

    const newUser = await userRepository.createUser({ ...user });

    return newUser;
  }
}

export default CreateUserService;

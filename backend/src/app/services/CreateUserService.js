import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class CreateUserService {
  static async execute(user) {
    userRepository.createUser({ ...user });
  }
}

export default CreateUserService;

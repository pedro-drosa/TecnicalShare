import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class FindAllUsersService {
  static async execute() {
    const users = await userRepository.findAllUsers();
    return users;
  }
}

export default FindAllUsersService;

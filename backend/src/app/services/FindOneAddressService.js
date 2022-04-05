// import AddressRepository from '../repositories/AddressRepository.js';
import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class FindOneAddressService {
  static async execute(id) {
    const userExists = await userRepository.findOneUserById(id, {
      include: { association: 'address' },
    });

    if (!userExists) return null;
    return userExists;
  }
}

export default FindOneAddressService;

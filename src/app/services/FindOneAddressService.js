// import AddressRepository from '../repositories/AddressRepository.js';
import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class FindOneAddressService {
  static async execute(id) {
    const userExists = await userRepository.findOneUserById(id, {
      include: { association: 'address' },
    });

    if (!userExists) {
      throw new Error('user not found, check data and try again').message;
    }

    if (!userExists.address) {
      throw new Error('no address found for this user so far').message;
    }

    return userExists.address;
  }
}

export default FindOneAddressService;

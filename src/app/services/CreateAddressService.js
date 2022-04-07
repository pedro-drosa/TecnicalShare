import AddressRepository from '../repositories/AddressRepository.js';
import UserRepository from '../repositories/UserRepository.js';

const addressRepository = new AddressRepository();
const userRepository = new UserRepository();

class CreateAddressService {
  static async execute(address) {
    const { id, zipcode, uf, city } = address;
    const userExists = await userRepository.findOneUserById(id);

    if (!userExists) return null;

    const newAddress = await addressRepository.createAddress({
      id,
      zipcode,
      uf,
      city,
    });

    return newAddress;
  }
}

export default CreateAddressService;

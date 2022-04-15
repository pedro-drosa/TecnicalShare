import AddressRepository from '../repositories/AddressRepository.js';
import UserRepository from '../repositories/UserRepository.js';
import Validate from '../../utils/Validate.js';

const addressRepository = new AddressRepository();
const userRepository = new UserRepository();

class CreateAddressService {
  static async execute(address) {
    const { id, zipcode, uf, city } = address;

    if (!(await Validate.addressValidation(address))) {
      throw new Error('data validation error').message;
    }

    const userExists = await userRepository.findOneUserById(id);

    if (!userExists) {
      throw new Error('no user found, check data and try again').message;
    }

    const newAddress = await addressRepository.createAddress({
      id,
      zipcode,
      uf,
      city,
    });

    if (!newAddress) {
      throw new Error('it was not possible to register a new address');
    }

    return newAddress[0];
  }
}

export default CreateAddressService;

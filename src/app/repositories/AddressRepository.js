import Address from '../models/Address.js';

class AddressRepository {
  createAddress({ id, zipcode, uf, city }) {
    return Address.create({ user_id: id, zipcode, uf, city });
  }
}

export default AddressRepository;

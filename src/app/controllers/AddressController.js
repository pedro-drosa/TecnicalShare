import CreateAddressService from '../services/CreateAddressService.js';
import FindOneAddressService from '../services/FindOneAddressService.js';

class AddressController {
  async index(req, res) {
    const { id } = req.params;
    const address = await FindOneAddressService.execute(id);

    return res.json(address);
  }

  async store(req, res) {
    const { id } = req.params;
    const { zipcode, uf, city } = req.body;

    const address = await CreateAddressService.execute({
      id,
      zipcode,
      uf,
      city,
    });

    return res.json(address);
  }
}

export default AddressController;

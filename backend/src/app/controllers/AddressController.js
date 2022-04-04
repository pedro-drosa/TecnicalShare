import CreateAddressService from '../services/CreateAddressService.js';

class AddressController {
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

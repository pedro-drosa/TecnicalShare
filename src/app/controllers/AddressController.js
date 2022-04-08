import CreateAddressService from '../services/CreateAddressService.js';
import FindOneAddressService from '../services/FindOneAddressService.js';

class AddressController {
  async index(req, res) {
    try {
      const address = await FindOneAddressService.execute(req.userId);

      return res.json(address);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async store(req, res) {
    try {
      const { zipcode, uf, city } = req.body;

      const address = await CreateAddressService.execute({
        id: req.userId,
        zipcode,
        uf,
        city,
      });

      return res.json(address);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default AddressController;

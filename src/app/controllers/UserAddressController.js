import RegisterAddressForOneUserService from '../services/RegisterAddressForOneUserService.js';
import FindUserAddressService from '../services/FindUserAddressService.js';

class UserAddressController {
  async index(req, res) {
    try {
      const address = await FindUserAddressService.execute(req.userId);

      return res.json(address);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async store(req, res) {
    try {
      const { zipcode, uf, city } = req.body;

      const address = await RegisterAddressForOneUserService.execute({
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

export default UserAddressController;

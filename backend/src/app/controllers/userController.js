import createUserService from '../services/CreateUserService.js';

class UserController {
  async store(req, res) {
    const user = req.body;
    createUserService.execute(user);

    return res.json(user);
  }
}

export default UserController;

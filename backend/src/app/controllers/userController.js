import createUserService from '../services/CreateUserService.js';
import findUsersService from '../services/FindAllUsersService.js';

class UserController {
  async index(req, res) {
    const users = await findUsersService.execute();
    return res.json(users);
  }

  async store(req, res) {
    const user = req.body;
    const newUser = await createUserService.execute(user);

    return res.json(newUser);
  }
}

export default UserController;

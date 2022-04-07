import createUserService from '../services/CreateUserService.js';
import findUsersService from '../services/FindAllUsersService.js';
import findOneUserService from '../services/FindOneUserService.js';

class UserController {
  async index(req, res) {
    const users = await findUsersService.execute();
    return res.json(users);
  }

  async show(req, res) {
    const { id } = req.params;
    const user = await findOneUserService.execute(id);

    if (!user) {
      return res
        .status(404)
        .json({ error: 'no user found, check data and try again' });
    }

    return res.json(user);
  }

  async store(req, res) {
    try {
      const user = req.body;
      const newUser = await createUserService.execute(user);

      return res.json(newUser);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default UserController;

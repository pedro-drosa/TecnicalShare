import User from '../models/User.js';

class UserController {
  async store(req, res) {
    const user = await User.create({
      name: 'Orange Juice',
      email: 'orange@juice.com',
      password: '123123',
      mentor: false,
      biography: 'talk is cheap, show me the code',
    });

    return res.json(user);
  }
}

export default UserController;

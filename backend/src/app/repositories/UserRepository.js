import User from '../models/User.js';

class UserRepository {
  findAllUsers() {
    return User.findAll();
  }

  createUser({
    name,
    email,
    password,
    occupationArea,
    genre,
    birth,
    biography,
  }) {
    return User.create({
      name,
      email,
      password,
      occupation_area: occupationArea,
      genre,
      birth,
      biography,
    });
  }

  findOneUserByEmail(email) {
    return User.findOne({ where: { email } });
  }
}

export default UserRepository;

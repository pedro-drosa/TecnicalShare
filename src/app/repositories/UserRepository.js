import User from '../models/User.js';

class UserRepository {
  findOneUser(options) {
    return User.findOne(options);
  }

  findAllUsers(options) {
    return User.findAll(options);
  }

  createUser(user) {
    const {
      name,
      email,
      password,
      occupationArea,
      genre,
      birth,
      biography,
      mentor,
      portfolio,
      social,
    } = user;
    return User.create({
      name,
      email,
      password,
      occupation_area: occupationArea,
      genre,
      birth,
      biography,
      mentor,
      portfolio,
      social,
    });
  }

  findOneUserByEmail(email) {
    return User.findOne({ where: { email } });
  }

  findOneUserById(id, options = null) {
    return User.findByPk(id, options);
  }
}

export default UserRepository;

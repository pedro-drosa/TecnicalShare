import User from '../models/User.js';

class UserRepository {
  createUser({ name, email, password, mentor, biography }) {
    return User.create({
      name,
      email,
      password,
      mentor,
      biography,
    });
  }
}

export default UserRepository;

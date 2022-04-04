import User from '../models/User.js';

class UserRepository {
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
}

export default UserRepository;

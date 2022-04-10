import { Op } from 'sequelize';
import User from '../models/User.js';

class UserRepository {
  findOneUser(options) {
    return User.findOne(options);
  }

  findAllUsers(options) {
    return User.findAll(options);
  }

  findAllMentors(exceptId) {
    return User.findAll({
      where: { id: { [Op.not]: exceptId }, mentor: true },
      attributes: ['id', 'name', 'email', 'occupation_area', 'genre'],
      include: {
        attributes: ['tag_name'],
        association: 'tags',
        through: { attributes: [] },
      },
    });
  }

  createUser(user) {
    return User.create({
      name: user.name,
      last_name: user.lastName,
      email: user.email,
      password: user.hash,
      occupation_area: user.occupationArea,
      genre: user.genre,
      birth: user.birth,
      biography: user.biography,
      mentor: user.mentor,
      portfolio: user.portfolio,
      social: user.social,
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

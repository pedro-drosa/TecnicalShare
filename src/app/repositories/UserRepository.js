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

  findAllCompatibleMentorsByTags(exceptId, tags) {
    return User.findAll({
      attributes: ['id', 'name', 'last_name', 'email'],
      order: ['id'],
      include: [
        {
          association: 'tags',
          attributes: ['tag_name'],
          through: { attributes: [] },
          where: { tag_name: { [Op.like]: { [Op.any]: [...tags] } } },
        },
      ],
      where: {
        id: { [Op.not]: exceptId },
        mentor: true,
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

  findOneUserAndTagsById(userId) {
    return User.findByPk(userId, {
      attributes: [],
      include: {
        association: 'tags',
        attributes: ['tag_name'],
        through: { attributes: [] },
      },
    });
  }
}

export default UserRepository;

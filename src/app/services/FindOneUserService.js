import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class FindOneUserService {
  static async execute(id) {
    try {
      const user = await userRepository.findOneUserById(id, {
        include: [
          { association: 'address', attributes: ['zipcode', 'uf', 'city'] },
          {
            association: 'tags',
            attributes: ['tag_name'],
            through: { attributes: [] },
          },
        ],
      });
      return user;
    } catch (errr) {
      return null;
    }
  }
}

export default FindOneUserService;

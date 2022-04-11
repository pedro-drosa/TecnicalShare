import TagRepository from '../repositories/TagRepository.js';

import FindOneUserService from './FindOneUserService.js';

const tagRepository = new TagRepository();

class AddNewTagsForOneUserService {
  static async execute(id, tags) {
    const userExists = await FindOneUserService.execute(id);

    if (!userExists) {
      throw new Error('could not add new tags').message;
    }

    if (!tags.every((tag) => typeof tag === 'string')) {
      throw new Error('validation error, check the information and try again')
        .message;
    }

    const newTags = await tagRepository.createTagsForOneUser(userExists, tags);

    return newTags;
  }
}

export default AddNewTagsForOneUserService;

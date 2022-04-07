import TagRepository from '../repositories/TagRepository.js';

import FindOneUserService from './FindOneUserService.js';

const tagRepository = new TagRepository();

class CreateTagsService {
  static async execute(id, tags) {
    const user = await FindOneUserService.execute(id);

    if (!user) return null;

    const newTags = await tagRepository.createTagsForOneUser(user, tags);

    return newTags;
  }
}

export default CreateTagsService;

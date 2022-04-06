import Tag from '../models/Tag.js';

class TagRepository {
  async createTagsForOneUser(user, tags) {
    tags.forEach(async (item) => {
      const [tag] = await Tag.findOrCreate({
        where: { tag_name: item },
      });

      user.addTag(tag);
    });

    return true;
  }
}

export default TagRepository;

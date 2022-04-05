import Tag from '../models/Tag.js';

class TagRepository {
  async createTagsForOneUser(user, tags) {
    try {
      tags.forEach(async (item) => {
        const [tag] = await Tag.findOrCreate({
          where: { tag_name: item.tagName },
        });

        await user.addTag(tag);
      });

      return true;
    } catch (error) {
      return false;
    }
  }
}

export default TagRepository;

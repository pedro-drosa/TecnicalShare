import CreateTagsService from '../services/CreateTagsService.js';
import FindAllTagsService from '../services/FindAllTagsService.js';

class TagController {
  async index(req, res) {
    try {
      const tags = await FindAllTagsService.execute(req.userId);

      return res.json(tags);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async store(req, res) {
    try {
      const { tags } = req.body;

      await CreateTagsService.execute(req.userId, tags);

      return res.status(201).json({ message: 'tag registration successful' });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default TagController;

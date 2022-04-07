import CreateTagsService from '../services/CreateTagsService.js';
import FindAllTagsService from '../services/FindAllTagsService.js';

class TagController {
  async index(req, res) {
    const { id } = req.params;
    const tags = await FindAllTagsService.execute(id);

    return res.json(tags);
  }

  async store(req, res) {
    const { id } = req.params;
    const { tags } = req.body;

    const status = await CreateTagsService.execute(id, tags);

    if (!status) {
      return res.status(400).json({ error: 'error when registering tags' });
    }

    return res.json({ message: 'tag registration successful', status });
  }
}

export default TagController;

import CreateTagsService from '../services/CreateTagsService.js';

class TagController {
  async index(req, res) {
    return res.json({ message: 'Listar todas as tags' });
  }

  async store(req, res) {
    const { id } = req.params;
    const { tags } = req.body;

    const status = await CreateTagsService.execute(id, tags);

    if (!status) {
      return res.status(400).json({ error: 'error when registering tags' });
    }

    return res.json({ status });
  }
}

export default TagController;

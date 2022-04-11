import AddNewTagsForOneUserService from '../services/AddNewTagsForOneUserService.js';
import FindAllTagsOfOneUserService from '../services/FindAllTagsOfOneUserService.js';

class UserTagController {
  async index(req, res) {
    try {
      const tags = await FindAllTagsOfOneUserService.execute(req.userId);

      return res.json(tags);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async store(req, res) {
    try {
      const { tags } = req.body;

      await AddNewTagsForOneUserService.execute(req.userId, tags);

      return res.status(201).json({ message: 'tag registration successful' });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default UserTagController;

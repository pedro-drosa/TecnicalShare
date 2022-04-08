import CreateLevelService from '../services/CreateLevelService.js';
import FindUserLevelService from '../services/FindUserLevelService.js';

class LevelController {
  async index(req, res) {
    try {
      const levels = await FindUserLevelService.execute(req.userId);

      return res.json(levels);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async store(req, res) {
    try {
      const { levelName } = req.body;

      const level = await CreateLevelService.execute(req.userId, levelName);

      return res.json(level);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default LevelController;

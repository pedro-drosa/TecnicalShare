import CreateLevelService from '../services/CreateLevelService.js';
import FindUserLevelService from '../services/FindUserLevelService.js';

class LevelController {
  async index(req, res) {
    const { id } = req.params;
    const levels = await FindUserLevelService.execute(id);

    return res.json(levels);
  }

  async store(req, res) {
    const { id } = req.params;
    const { levelName } = req.body;

    const level = await CreateLevelService.execute(id, levelName);

    return res.json(level);
  }
}

export default LevelController;

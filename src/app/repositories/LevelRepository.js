import Level from '../models/Level.js';

class LevelRepository {
  createLevel(id, levelName) {
    return Level.create({
      user_id: id,
      level_name: levelName,
    });
  }
}

export default LevelRepository;

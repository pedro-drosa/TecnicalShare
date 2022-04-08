import Level from '../models/Level.js';

class LevelRepository {
  createLevel(userId, levelName) {
    return Level.findOrCreate({
      where: {
        user_id: userId,
        level_name: levelName,
      },
    });
  }
}

export default LevelRepository;

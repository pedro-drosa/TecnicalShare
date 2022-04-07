import CreateSessionService from '../services/CreateSessionService.js';

class SessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const session = await CreateSessionService.execute(email, password);

      return res.json(session);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default SessionController;

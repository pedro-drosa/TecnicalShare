import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'no token sent' });
  }

  const [prefix, token] = authorization.split(' ');

  if (prefix !== 'Bearer') {
    return res.status(401).json({ error: 'the token format is invalid' });
  }

  try {
    const { id } = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = id;
    return next();
  } catch (error) {
    return res.status(401).json('Invalid Token');
  }
};

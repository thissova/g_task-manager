import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

export const checkAuth = async (req, res, next) => {
  // check for basic auth header

  if (
    !req.headers.authorization ||
    req.headers.authorization?.indexOf('Basic') === -1
  ) {
    return res.status(401).json({ message: 'Invalid authorization header' });
  }

  const base64Credentials = req.headers.authorization.split(' ')[1];

  const credentials = Buffer.from(base64Credentials, 'base64').toString(
    'ascii'
  );
  const [email, pass] = credentials.split(':');

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const isValid = await bcrypt.compare(pass, user.password);

  if (!isValid) {
    return res.status(400).json({ message: 'Invalid password or email' });
  }

  // attach user to request object
  req.user = user._doc;

  next();
};

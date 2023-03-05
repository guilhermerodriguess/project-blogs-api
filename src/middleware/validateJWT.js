const { verifyToken } = require('../auth/createTokenJWT');
require('dotenv/config');

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const decoded = verifyToken(authorization);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
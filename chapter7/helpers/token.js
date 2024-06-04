const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  return jwt.sign(payload, 'awokawok', { expiresIn: '1h' });
}

const decodeToken = (token) => {
  return jwt.verify(token, 'awokawok')
}

module.exports = {
  generateToken,
  decodeToken
}
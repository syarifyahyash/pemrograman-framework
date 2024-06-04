const { decodeToken } = require('../helpers/token');

function authorization(roles = []){
  if(typeof roles === 'string'){
    roles = [roles]
  }

  return [
    (res, req, next) => {
      try {
        const token = req.headers['authorization'];
        const user = decodeToken(token);
        const validToken = roles.find((level) => user.roles);

        if(!validToken){
          return res.status(401).json({
            status: false,
            message: 'Akses tidak di izinkan'
          });
        }

        req.user = user;
        next();

      } catch (error) {
        next(error)
      }
    }
  ]
}
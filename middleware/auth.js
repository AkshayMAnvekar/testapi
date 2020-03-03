const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if(req.headers.authorization) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
      const userId = decodedToken.userId;
      if (req.body.userId && req.body.userId !== userId) {
        throw 'Invalid user ID';
      } else {
        res.locals.user = userId;
        res.locals.authenticated = true;
        next();
      }
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!')
      });
    }
  } else {
    next();
  }
};
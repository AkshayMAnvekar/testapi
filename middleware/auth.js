const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req, res, next) => {
  if(req.headers.authorization) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.AUTH_PASS_KEY);
      const userId = decodedToken.userId;
      if (req.body.userId && req.body.userId !== userId) {
        throw 'Invalid user ID';
      } else {
        res.locals.user = req.body.userId;
        res.locals.authenticated = true;
        next();
      }
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!')
      });
    }
  } else {
    res.locals.user = req.body.userId;
    res.locals.authenticated = false;
    next();
  }
};
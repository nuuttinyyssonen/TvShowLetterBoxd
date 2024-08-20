const jwt = require('jwt');
const { SECRET } = require('./config');

const errorHandler = (error, req, res, next) => {
    if (error.name === 'CastError') {
      return res.status(400).send({ error: 'malformatted id' });
    } else if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({ error: 'token missing or invalid' });
    } else if (error.name === 'MongoServerError' && error.code === 11000) {
      return res.status(400).json({ error: 'This username already exists' });
    }
    next(error);
};

const tokenExtractor = (req, res, next) => {
    const authorization = req.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      try {
        req.decodedToken = jwt.verify(authorization.substring(7), SECRET);
      } catch {
        return res.status(401).json({ error: 'token invalid' });
      }
    } else {
      return res.status(401).json({ error: 'token missing' });
    }
    next();
};
  
module.exports = {
    errorHandler,
    tokenExtractor
};
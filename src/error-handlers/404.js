'use strict';

//specifically meant as a catch all
//if no route has been defined, catch that route

module.exports = (req, res, next) => {
  res.status(404).json({status: 404, msg: 'not found' });
  next();
}
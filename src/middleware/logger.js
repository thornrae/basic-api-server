'use strict'; 

module.exports = (req, res, next) => {
  console.log('request info: path&method.... ', req.path, req.method);
  next();
}


'use strict';

//something broke
//design pattern of exporting a single functions --> singleton

function handleError (err, req, res, next) {
  res.status(500).send({ status: 500, msg: 'something broke'})  
}

module.exports = handleError;

//doesn't require next() - because placed at bottom of file, says stop anyway
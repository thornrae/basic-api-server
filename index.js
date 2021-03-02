'use strict';

const server = require('./src/server.js');
server.start(3333);


// this will work 
// require('./src/server.js').start(3333);

// require('./src.server.js) --> is the object
// we often rename allows us to pull objects off the method in a clean fashion

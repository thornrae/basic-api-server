'use strict';

//put 1st party dependencies (built into node.js)
//3rd party dependencies
const express = require('express');
const app = express();

//custom / internal modules
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const clothesRoutes = require('./routes/clothes.js');
const foodRoutes = require('./routes/food.js');

//internal constants
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use('/', clothesRoutes);
app.use(foodRoutes)
app.use(logger);
//^^this line is what makes routes modular

//global  middleware
app.use('*', notFound); 
// ^^ this says:
//if anything above here was not caught, in terms of a route
//run notFound 

app.use(errors)
//^^ this says: 
//under any circumstance if there is an error
//pass thru here and will handle
//always at bottom of MW chain


module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening on ${port}`)
    });
  }
}
//^^ this: 
//the point of this structure is:
//i want to use this server as something to be tested
//when you make ur server something exportable that you can run only when you are running tests 
//and your test uses an in memory test engine ur not making requests to a live site which won't hurt anything
//you are developing in a contained environment
//and its something that will only start your server when your server needs to be started- IE only when your tests are running


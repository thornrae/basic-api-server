'use strict';

const express = require('express');

//pull in clothes constructor
const FoodModel = require('../models/food.js');
//^^ naming of this variable can be whatever, does not need to match the name of the class in the object you are bringing in

const food = new FoodModel();
//^^ this is how the ClothesModel is instantiated

const foodRouter = express.Router();
//^^ because of this now have ability to do ..
// clothesRouter.get() or clothesRouter.post()
//resource driven routing: instead of app.get(resource), its resource.get(moreinfointhisresource)

foodRouter.get('/food', getAllFood);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);

function getAllFood (req, res) {
  let all = food.get();
  res.status(200).json(all);
}
//^^have a route that says go in to the database and get the thing and then shows the thing to the user. ReST -> CRUD -> RES

function getOneFood (req, res) {
  let id = parseInt(req.params.id);
  //^^ we get this value from the route defnition. 
  //because it is in a string, we parseInt the req.params.id
  let item = food.get(id);
  res.status(200).json(item);
}

function createFood (req, res) {
  let obj = req.body;
  console.log(obj);
  let newFood = food.create(obj);
  console.log(newFood);
  res.status(201).json(newFood);
}

function updateFood (req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = food.update(id, content);
  res.status(200).json(updated);
}

function deleteFood (req, res) {
  let id = parseInt(req.params.id);
  let removed = food.delete(id);
  res.status(204).json('deleted item')
}

module.exports = foodRouter;
//^^ this has all things that have been bound to your router
//anything that we attach to our router can be exported so that i tcan be used in another file


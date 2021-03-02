'use strict';

const express = require('express');

//pull in clothes constructor
const ClothesModel = require('../models/clothes.js');
//^^ naming of this variable can be whatever, does not need to match the name of the class in the object you are bringing in

const clothes = new ClothesModel();
//^^ this is how the ClothesModel is instantiated

const clothesRouter = express.Router();
//^^ because of this now have ability to do ..
// clothesRouter.get() or clothesRouter.post()
//resource driven routing: instead of app.get(resource), its resource.get(moreinfointhisresource)

clothesRouter.get('/clothes', getAllClothes);
clothesRouter.get('/clothes/:id', getOneClothes);
clothesRouter.post('/clothes', createClothes);
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);

function getAllClothes (req, res) {
  let all = clothes.get();
  res.status(200).json(all);
}
//^^have a route that says go in to the database and get the thing and then shows the thing to the user. ReST -> CRUD -> RES

function getOneClothes (req, res) {
  let id = parseInt(req.params.id);
  //^^ we get this value from the route defnition. 
  //because it is in a string, we parseInt the req.params.id
  let item = clothes.get(id);
  res.status(200).json(item);
}

function createClothes (req, res) {
  let obj = req.body;
  console.log(obj);
  let newClothes = clothes.create(obj);
  console.log(newClothes);
  res.status(201).json(newClothes);
}

function updateClothes (req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = clothes.update(id, content);
  res.status(200).json(updated);
}

function deleteClothes (req, res) {
  let id = parseInt(req.params.id);
  let removed = clothes.delete(id);
  res.status(204).json('deleted item')
}

module.exports = clothesRouter;
//^^ this has all things that have been bound to your router
//anything that we attach to our router can be exported so that i tcan be used in another file


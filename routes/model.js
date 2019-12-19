const express = require("express");
const Controller = require("../controller/model");

const Router = express.Router()

Router.post("/add",  Controller.addModel);
Router.post("/marc",  Controller.getModelsByMarc);
Router.post("/get",  Controller.getModels);




module.exports = Router;

const express = require("express");
const Controller = require("../controller/model");

const Router = express.Router()

Router.post("/add",  Controller.addModel);
Router.post("/marc",  Controller.getModelsByMarc);
Router.post("/get",  Controller.getModels);
Router.post("/remove",  Controller.removeModels);
Router.post("/get/id",  Controller.getModelsById);
Router.post("/update/id",  Controller.updateModels);

module.exports = Router;

const express = require("express");
const Controller = require("../controller/order");

const Router = express.Router()

// Router.post("/add",  Controller.addModel);
// Router.post("/marc",  Controller.getModelsByMarc);
Router.post("/add",  Controller.getOrder);

module.exports = Router;

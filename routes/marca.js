const express = require("express");
const Controller = require("../controller/marca");

const Router = express.Router()

Router.post("/marca/add",  Controller.addMarc);
Router.post("/get/marcs/id",  Controller.getMarcsId);
Router.post("/marca/update",  Controller.updateMarcs);


module.exports = Router;


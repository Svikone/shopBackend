const express = require("express");
const Controller = require("../controller/marca");

const Router = express.Router()

Router.post("/marca/add",  Controller.addMarc);
Router.post("/get/marcs",  Controller.getMarcs);
Router.post("/get/marcs/id",  Controller.getMarcsId);
Router.post("/marca/update",  Controller.updateMarcs);
Router.post("/remove/id",  Controller.removeMarcsId);


module.exports = Router;


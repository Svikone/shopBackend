const express = require("express");
const Controller = require("../controller/category");

const Router = express.Router()

Router.post("/add",  Controller.addCategory);
Router.post("/get/all",  Controller.getCategorys);
Router.post("/remove",  Controller.removeCategorys);
Router.post("/get/id",  Controller.getCategorysId);
Router.post("/update/id",  Controller.updateCategorysId);


module.exports = Router;
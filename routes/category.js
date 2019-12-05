const express = require("express");
const Controller = require("../controller/category");

const Router = express.Router()

Router.post("/add",  Controller.addCategory);
Router.post("/get/all",  Controller.getCategorys);



module.exports = Router;
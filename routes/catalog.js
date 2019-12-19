const express = require("express");
const Controller = require("../controller/catalog");

const Router = express.Router()

// Router.post("/add",  Controller.addCategory);
Router.post("/get/all/condition",  Controller.getCatalogsByCondition);
Router.post("/add",  Controller.addCatalogs);
Router.post("/get/all",  Controller.getCatalogs);





module.exports = Router;
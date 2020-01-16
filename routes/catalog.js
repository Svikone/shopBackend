const express = require("express");
const Controller = require("../controller/catalog");

const Router = express.Router()

// Router.post("/add",  Controller.addCategory);
Router.post("/get/all/condition",  Controller.getCatalogsByCondition);
Router.post("/add",  Controller.addCatalogs);
Router.post("/get/all",  Controller.getCatalogs);
Router.post("/cart/added/products",  Controller.getProductsByCart);
Router.post("/search",  Controller.searchCategorys);
Router.post("/remove",  Controller.removeCategorys);


module.exports = Router;
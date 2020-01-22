const express = require("express");
const Controller = require("../controller/order");

const Router = express.Router()

Router.post("/add",  Controller.getOrder);
Router.post("/by/id",  Controller.orderById);
Router.post("/get/all",  Controller.getAllOrder);
Router.post("/change/status_payment",  Controller.updateStatusPayment);
Router.post("/change/status_confirm",  Controller.updateStatusConfirm);


module.exports = Router;

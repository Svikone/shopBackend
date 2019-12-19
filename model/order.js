const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
   status_confirm: String,
   status_payment: String,
   user_name: String,
   phone: Number 
});
module.exports = mongoose.model("orders",orderSchema);
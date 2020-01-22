const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
   status_confirm: Boolean,
   status_payment: Boolean,
   user_name: String,
   phone: Number 
});
module.exports = mongoose.model("orders",orderSchema);
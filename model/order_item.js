const mongoose = require("mongoose");
const orderItemSchema = mongoose.Schema({
    order_id: String,
    product_id: String,
    price: Number,
    full_price: Number,
    number: Number,
    name: String

});
module.exports = mongoose.model("order_items",orderItemSchema);
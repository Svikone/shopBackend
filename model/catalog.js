const mongoose = require("mongoose");
const catalogSchema = mongoose.Schema({
    name: String,
    marca: String,
    model: String,
    catalog: String,
    url_img: String,
    price: String,
    country: String

});
module.exports = mongoose.model("catalogs",catalogSchema);
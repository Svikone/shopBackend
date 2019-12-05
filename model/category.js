const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
    category: String,
    url_img: String,
    category_ru: String,
    selector: String
});
module.exports = mongoose.model("categorys",categorySchema);
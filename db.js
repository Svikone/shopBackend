const mongoose = require("mongoose");
const uri = process.env.MONGO_URI || "mongodb+srv://vlad:admin@cluster0-vzqoj.mongodb.net/shop" ;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log("Database is worked");
}).catch( (e) =>{
	console.log("Database disconnect");
}) 
module.exports = mongoose.connection;


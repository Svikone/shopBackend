const mongoose = require("mongoose");
const uri = "mongodb+srv://vlad:<admin>@cluster0-vzqoj.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
	console.log("Database is worked");
}).catch( (e) =>{
	console.log("Database disconnect");
}) 
module.exports = mongoose.connection;


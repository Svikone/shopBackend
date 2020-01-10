// const mongoose = require("mongoose");
const uri = process.env.MONGO_URI || "mongodb+srv://vlad:admin@cluster0-vzqoj.mongodb.net/shop" ;

// mongoose.connect(uri, { 
// 	useUnifiedTopology: true
// 	}).then(() => {
// 	console.log("Database is worked");
// }).catch( (e) =>{
// 	console.log("Database disconnect");
//     process.exit(1);
// }) 
// module.exports = mongoose.connection;


const MongoClient = require("mongodb").MongoClient;
 
// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient(uri, { useNewUrlParser: true });
mongoClient.connect(function(err, client){
 
    if(err){
        return console.log(err);
    }
    // взаимодействие с базой данных
    client.close();
});

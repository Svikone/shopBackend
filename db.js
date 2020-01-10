const mongoose = require("mongoose");
const uri = process.env.MONGO_URI || "mongodb+srv://vlad:admin@cluster0-vzqoj.mongodb.net/shop" ;

mongoose.connect(uri, { useNewUrlParser: true}).then(() => {
	console.log("Database is worked");
}).catch( (e) =>{
	console.log("Database disconnect");
    process.exit(1);
}) 
module.exports = mongoose.connection;

// const db = process.env.MONGODB_URL || "mongodb+srv://vlad:admin@cluster0-vzqoj.mongodb.net/shop";

// exports.connectDB = async () => {
//   try {
//     await mongoose.connect(db, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true
//     });
//     console.log("MongoDB is Connected...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

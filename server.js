const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

app.use(cors({origin: "http://localhost:8080"}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json ({
	extended: true,
	limit: "50mb"
}));

const adminRouter = require("./routes/marca");
const modelRouter = require("./routes/model");
const categoryRouter = require("./routes/category");
const catalogRouter = require("./routes/catalog");





app.use("/api/admin", adminRouter);
app.use("/api/model", modelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/catalog", catalogRouter);





app.listen(9000, function(){
    console.log("server started 9000");
})
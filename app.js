const path = require("node:path");
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRoute");
const PORT = 3000;

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/",indexRouter);

app.listen(PORT,()=>{
    console.log("Server Running on port "+PORT);
})
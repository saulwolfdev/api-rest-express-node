const bodyParser=require("body-parser");
const morgan=require("morgan");
const express=require("express");
const app=express();

//SETTINGS
app.set("json spaces",4);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//REQUEST ROUTES
const productRoutes = require("./routes/products");

//ROUTES
app.use("/products",productRoutes);

//STATIC FILES

//START SERVER

app.listen(3000,()=>{
	console.log("Server on port, 3000")
});
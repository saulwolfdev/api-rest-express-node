const express=require("express");
const app=express();


app.get("/",(req,res)=>{
	res.send("index page")
})

app.get("/random/:numberInit/:numberFinal",(req,res)=>{
	console.log("=>",req.params.numberInit);
	console.log("=>",req.params.numberFinal);
	res.send("recevied");
})

app.listen(3000,()=>{
	console.log("Server on port, 3000")
})
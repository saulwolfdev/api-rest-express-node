"use strict";
const express = require("express")
const app=express()

// app.get("/",(req,res)=>{
//     res.send("recibido!")
// })
// app.get("/",()=>{
//     res.send("index")
// })
// app.get("/random/:nI/:nF",(req,res)=>{
//     const min=parseInt(req.params.nI);
//     const max=parseInt(req.params.nF);
//     if(isNaN(min)||isNaN(max)){
//         res.status(404);
//         res.json({"error":"Bad request"})
//     }

//     const result=Math.floor(Math.random()*(max-min)+min)
    
//     res.json({"random number": result})
// })
// app.post("/",(req,res)=>{
//     res.send("guardando...")
// })
// app.put("/",(req,res)=>{
//     res.send("actualizando!!")
// })
// app.delete("/",(req,res)=>{
//     res.send("eliminando!!!")
// })
app.listen(3000, ()=>{
console.log("express")
})
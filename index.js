"use strict";
const morgan=require("morgan")
const bodyParser=require("body-parser")

const express = require("express")
const app =express()

app.get("/",(req,res)=>{
    res.send("Server OK")
})
app.listen(3000,()=>{
    console.log("Server on port 3000 =>")
})
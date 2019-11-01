const morgan=require("morgan")
const bodyParser=require("body-parser")
require("dotenv").config()

const express = require("express")
const app =express()

//Settings

app.set("AppName","Wolf")
app.set("port",5000)
app.set("view engine", "ejs")

//middlewares
// function logger(req,res,next){
//     console.log(`Rouwtes:=> ${req.protocol}://${req.get("host")}${req.originalUrl}`)
//     next()
// }
app.use(express.json())
// app.use(logger)
app.use(morgan("dev"))

// app.get("/",(req,res)=>{
//     res.send("GET")
// })
app.get("/",(req,res)=>{
   const data=[{name:"Saulll"},{name:"Samaaaa"},{name:"Saint"}]
   res.render("index.ejs",{people:data})
})

app.get("/User",(req,res)=>{
    console.log("with get")
    res.json({
        username:"Saul",
        lastname:"Alejos"
    })
})
app.use(express.json())
app.post("/User",(req,res)=>{
    console.log("with post")
    console.log(req.body)
    res.send("POST OK")
})
app.post("/About",(req,res)=>{
    res.send("POST")
})
app.put("/Home",(req,res)=>{
    res.send("PUT")
})
app.delete("/Contact",(req,res)=>{
    res.send("DELETE")
})

app.use(express.static("public"))

app.listen(app.get("port"),()=>{
    console.log(app.get("AppName"))
    console.log("Server on port 5000 =>")
})
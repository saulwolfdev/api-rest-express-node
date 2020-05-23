
const express=require("express");
const router=express.Router();


router.route("/")
	.get((req,res)=>{
		res.json({products:[]})
	})
	.post((req,res)=>{

	});




module.exports=router;
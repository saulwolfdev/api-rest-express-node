
const express=require("express");
const router=express.Router();



//CONTROLLERS
const {getProducts,addProducts} =require("../controllers/products");
router.route("/")
	.get(getProducts)
	.post(addProducts);




module.exports=router;
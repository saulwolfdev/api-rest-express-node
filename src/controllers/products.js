
const {products}=require("../db.json");
module.exports={
	getProducts:(req,res)=>{
		res.json({products:products});
	},
	addProducts:(req,res)=>{
		const {name}=req.body;
		products.push({id:products.length,name});
		res.json({"request":"this product was charge"});
	}
};
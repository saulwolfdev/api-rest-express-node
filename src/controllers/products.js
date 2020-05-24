
const {products}=require("../db.json");
module.exports={
	getProducts:(req,res)=>{
		res.json({products:products});
	},
	addProducts:(req,res)=>{
		const {name}=req.body;
		products.push({id:products.length,name});
		res.json({"request":"this product was charge"});
	},
	updateProducts:(req,res)=>{
		const {id}=req.params;
		const {name}=req.body;
		products.forEach((product,i)=>{
			if(product.id===Number(id)){
				product.name=name;
			}
		});
		res.json({
			"succes":true,
			"messages":"updates"

		});
	},
	deleteProducts:(req,res)=>{
		const {id}=req.params;
		products.forEach((product, i)=>{
			if(product.id===Number(id)){
				products.splice(i,1);
			}
		});
		res.json({
			"success":true,
			"messages":"delete"
		});
		
	}
};
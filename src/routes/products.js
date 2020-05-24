
const express = require("express");
const router = express.Router();


//CONTROLLERS
const {
	getProducts,
	addProducts,
	updateProducts,
	deleteProducts
} = require("../controllers/products");
router.route("/")
	.get(getProducts)
	.post(addProducts);
router.route("/:id")
	.put(updateProducts)
	.delete(deleteProducts);



module.exports = router;
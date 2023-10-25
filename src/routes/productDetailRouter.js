const { Router } = require("express");
const productDetailController = require("../controllers/productDetailController");
 
const router = Router();

router.get("/productDetail", productDetailController.productDetail);

module.exports = router;
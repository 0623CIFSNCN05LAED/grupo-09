const { Router } = require("express");
const productCartCotroller = require("../controllers/productCartController");
 
const router = Router();

router.get("/productCart", productCartCotroller.productCart);

module.exports = router;
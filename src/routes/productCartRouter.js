const { Router } = require("express");
const productCartCotroller = require("../controllers/productCartCcontroller");
 
const router = Router();

router.get("/productCart", productCartCotroller.productCart);

module.exports = router;
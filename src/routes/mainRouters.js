const { Router } = require("express");
const mainController = require("../controllers/mainControllers");
 
const router = Router();
const multer = require('multer');

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.post("/login", mainController.guardarlogin);
router.get("/register", mainController.register);
router.get("/productCart", mainController.productCart);
router.get("/productDetail", mainController.productDetail);



module.exports = router;

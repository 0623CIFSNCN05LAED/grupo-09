const { Router } = require("express");
const mainController = require("../controllers/mainControllers");
 
const router = Router();


router.get("/", mainController.home);


//CRUD Productos
//router.get("/productos/create", mainController.productosCreate);
//router.get("/productos/edit", mainController.productosEdit);
//router.get("/productos/delete", mainController.productosDelete);



module.exports = router;

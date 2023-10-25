const { Router } = require("express");
const productosController = require("../controllers/productsController");
 
const router = Router();


router.get("/productos/anafes",productosController.anafes);
router.get("/productos/heladeras",productosController.heladeras);
router.get("/productos/cocinas",productosController.cocinas);
router.get("/productos/freezers",productosController.freezers);
router.get("/productos/lavarropas",productosController.lavarropas);
router.get("/productos/lavavajillas",productosController.lavavajillas);
router.get("/productos/microondas",productosController.microondas);

module.exports = router;
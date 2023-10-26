const { Router } = require("express");
const router = Router();
const productsController = require("../controllers/productsController");

router.get("/productos/anafes", productsController.anafes);
router.get("/productos/heladeras", productsController.heladeras);
router.get("/productos/cocinas", productsController.cocinas);
router.get("/productos/freezers", productsController.freezers);
router.get("/productos/lavarropas", productsController.lavarropas);
router.get("/productos/lavavajillas", productsController.lavavajillas);
router.get("/productos/microondas", productsController.microondas);

router.get('/productos/nuevo', productsController.add);
router.post('/productos/create', productsController.create);
router.get('/productos/editar/:id', productsController.edit);
router.post('/productos/update/:id', productsController.update);
router.get('/productos/eliminar/:id', productsController.delete);
router.post('/productos/destroy/:id', productsController.destroy);

module.exports = router;
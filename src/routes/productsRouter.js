const { Router } = require("express");
const router = Router();
const productsController = require("../controllers/productsController");

router.get('/productos', productsController.list);

router.get('/productos/nuevo', productsController.add);
router.post('/productos/create', productsController.create);
router.get('/productos/editar/:id', productsController.edit);
router.post('/productos/update/:id', productsController.update);
router.get('/productos/eliminar/:id', productsController.delete);
router.post('/productos/destroy/:id', productsController.destroy);

router.get("/productos/heladeras", productsController.listHeladeras);
router.get("/productos/lavarropas", productsController.listLavarropas);
router.get("/productos/cocinas", productsController.listCocinas);
router.get("/productos/microondas", productsController.listMicroondas);
router.get("/productos/lavavajillas", productsController.listLavavajillas);
router.get("/productos/hornos", productsController.listHornos);

module.exports = router;
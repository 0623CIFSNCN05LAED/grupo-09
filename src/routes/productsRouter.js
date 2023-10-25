const { Router } = require("express");
const router = Router();
const productsController = require("../controllers/productsController");
 
router.get('/productos/nuevo', productsController.add);
router.post('/productos/create', productsController.create);
router.get('/productos/editar/:id', productsController.edit);
router.post('/productos/update/:id', productsController.update);
router.get('/productos/eliminar/:id', productsController.delete);
router.post('/productos/destroy/:id', productsController.destroy);

module.exports = router;
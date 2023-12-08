const { Router } = require("express");
const router = Router();
const productControllerAPI = require("../../controllers/api/productControllerAPI");

router.get('/api/productos', productControllerAPI.list);
router.get('/api/productos/:id', productControllerAPI.detail);

module.exports = router;
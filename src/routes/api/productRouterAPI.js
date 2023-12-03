const { Router } = require("express");
const router = Router();
const productControllerAPI = require("../../controllers/api/productControllerAPI");

router.get("/api/productos", productControllerAPI.list);

module.exports = router;
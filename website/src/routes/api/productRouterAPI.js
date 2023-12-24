const { Router } = require("express");
const router = Router();
const productControllerAPI = require("../../controllers/api/productControllerAPI");

router.get('/', productControllerAPI.list);
router.get('/:id', productControllerAPI.detail);

module.exports = router;
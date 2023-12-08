const { Router } = require("express");
const router = Router();
const userControllerAPI = require("../../controllers/api/userControllerAPI");

router.get('/api/usuarios', userControllerAPI.list);
router.get('/api/usuarios/:id', userControllerAPI.detail);

module.exports = router;
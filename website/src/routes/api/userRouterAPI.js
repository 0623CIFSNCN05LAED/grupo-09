const { Router } = require("express");
const router = Router();
const userControllerAPI = require("../../controllers/api/userControllerAPI");

router.get('/', userControllerAPI.list);
router.get('/:id', userControllerAPI.detail);

module.exports = router;
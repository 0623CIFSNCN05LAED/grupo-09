const { Router } = require("express");
const router = Router();
const categoryControllerAPI = require("../../controllers/api/categoryControllerAPI");

router.get('/', categoryControllerAPI.list);

module.exports = router;
const { Router } = require("express");
const router = Router();

const productsRouterAPI = require("./productRouterAPI")
router.use("/productos", productsRouterAPI);

const usersRouterAPI = require("./userRouterAPI")
router.use("/usuarios", usersRouterAPI); 

module.exports = router;
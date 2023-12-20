const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainController");
router.get("/", mainController.home);

const usersRouter = require("./userRouter")
router.use(usersRouter);
router.use("/usuarios", usersRouter);

const productsRouter = require("../routes/productRouter")
router.use("/productos", productsRouter);

const productsRouterAPI = require("../routes/api/productRouterAPI")
router.use(productsRouterAPI);

const usersRouterAPI = require("../routes/api/userRouterAPI")
router.use(usersRouterAPI);

module.exports = router;

const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainController");
router.get("/", mainController.home);

const usersRouter = require("./userRouter")
router.use(usersRouter);
router.use("/usuarios", usersRouter);

const productsRouter = require("./productRouter")
router.use("/productos", productsRouter);

const apiRouter = require("./api/mainRouterAPI")
router.use("/api", apiRouter);

module.exports = router;

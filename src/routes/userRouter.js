const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();
const validateCreateForm = require("../middlewares/validate-create-form")


const validationsRegister = require ("../validations/register-validation");
const uploadFile = require ("../middlewares/multer-register-validaion")


router.get("/newuser", userController.register);
router.post("/register",uploadFile.single('avatar'), validationsRegister, validateCreateForm, userController.processRegister);

router.get("/login", userController.login);
router.post("/login", userController.guardarlogin);

module.exports = router;

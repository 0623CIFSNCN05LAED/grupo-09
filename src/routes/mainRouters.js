const { Router } = require("express");
const mainController = require("../controllers/mainControllers");
 
const router = Router();
const multer = require('multer');
const path = require("path");
const { body } = require("express-validator");



const validations = [
    body("email").notEmpty().withMessage("Tienes que escribir un correo electrónico"),
    body("contrasena")
    .notEmpty().withMessage("Tienes que escribir una contraseña").bail()
    .isEmail().withMessage("Debes escribir un formato válido"),

]

const validationsRegister = [
    body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('country').notEmpty().withMessage('Tienes que elegir un país'),
]

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.post("/login", validations ,mainController.guardarlogin);
router.get("/register", mainController.register);
router.post("/register", validationsRegister, mainController.processRegister)
router.get("/productCart", mainController.productCart);
router.get("/productDetail", mainController.productDetail);

module.exports = router;

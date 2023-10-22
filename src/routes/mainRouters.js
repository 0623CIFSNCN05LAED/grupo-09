const { Router } = require("express");
const mainController = require("../controllers/mainControllers");
 
const router = Router();
const multer = require('multer');
const path = require("path");
const { body } = require("express-validator");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });

const validationsRegister = [
    body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('country').notEmpty().withMessage('Tienes que elegir un país'),
    body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.post("/login",mainController.guardarlogin);
router.get("/register", mainController.register);
router.post("/register", uploadFile.single('avatar'),validationsRegister, mainController.processRegister)
router.get("/productCart", mainController.productCart);
router.get("/productDetail", mainController.productDetail);
router.get("/productAdmin", mainController.productAdmin);
router.get("/anafes",mainController.anafes);
router.get("/heladeras",mainController.heladeras);
router.get("/cocinas",mainController.cocinas);
router.get("/freezers",mainController.freezers);
router.get("/lavarropas",mainController.lavarropas);
router.get("/lavavajillas",mainController.lavavajillas);
router.get("/microondas",mainController.microondas);


module.exports = router;

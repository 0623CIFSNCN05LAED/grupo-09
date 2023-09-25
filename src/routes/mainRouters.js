const { Router } = require("express");
const mainController = require("../controllers/mainControllers");
 
const router = Router();
const multer = require('multer');
const path = require("path");
const { body } = require("express-validator");

 const storage = multer.diskStorage({

        destination: (req, file, cb) =>{
            cb(null, "../public/images/avatars");
        },

        filename: (req, file, cb) =>{
            let fileName = `${Date.now()}_img${path.extname(file.originalname)}`; 
            cb(null, fileName);
        }
    });

const uploadFile = multer({ storage });

const validations = [
    body("email").notEmpty().withMessage("Tienes que escribir un correo electrónico"),
    body("contrasena")
    .notEmpty().withMessage("Tienes que escribir una contraseña").bail()
    .isEmail().withMessage("Debes escribir un formato válido"),

]

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.post("/login", validations ,mainController.guardarlogin);
router.get("/register", mainController.register);
router.get("/productCart", mainController.productCart);
router.get("/productDetail", mainController.productDetail);

module.exports = router;

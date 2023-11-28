const { body } = require("express-validator");
const userServices = require("../services/userServices");
const path = require("path");

module.exports = [
    body("fullname")
        .notEmpty()
        .withMessage("Ingresar nombre")
        .isLength({ min: 2 })
        .withMessage("El nombre debe tener al menos dos caracteres"),
    body("email")
        .notEmpty()
        .withMessage("Ingresar correo eléctrónico")
        .isEmail()
        .withMessage("Inngresar un formato de correo electronico válido")
        .bail()
        .custom(async (value, { req }) => {
            let email = req.body.email;
            let emailToLower = email.toLowerCase();
            let checkEmail = await userServices.getUserByEmail(emailToLower);
            if (!checkEmail) {
                return true;
            } else {
                throw new Error(`El correo electrónico ${email} ya está registrado.`);
            }
        }),
    body("clave")
        .notEmpty()
        .withMessage("Ingresar contraseña")
        .bail()
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener al menos 8 caracteres")
        .bail()
        .matches(/[A-Z]/)
        .withMessage("La contraseña debe contener al menos una letra mayúscula")
        .bail()
        .matches(/[a-z]/)
        .withMessage("La contraseña debe contener al menos una letra minúscula")
        .bail()
        .matches(/[\d]/)
        .withMessage("La contraseña debe contener al menos un número")
        .bail()
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage("La contraseña debe contener al menos un carácter especial"),
    body("avatar").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

        if (!file) {
            throw new Error('Seleccionar avatar');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(
                `Las extensiones aceptadas son ${acceptedExtensions.join(", ")}`
                );
            }
        }
        return true;
    }),
];
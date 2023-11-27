const { body } = require("express-validator");

module.exports = [
  body("email")
    .notEmpty()
    .withMessage("Ingrese correo electronico")
    .bail()
    .isEmail()
    .withMessage('Ingrese un correo electronico valido') 
    .trim() 
    .escape(), 
  body("password")
    .notEmpty()
    .withMessage('Ingresá tu contraseña')
    .bail()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'),
];

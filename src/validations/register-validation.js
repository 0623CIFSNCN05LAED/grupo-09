const { body } = require("express-validator");
const path = require("path");


const validationsRegister = [
    body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('telefono').matches(/^\d{10}$/).withMessage('Por favor, ingresa un número de teléfono válido de 10 dígitos (solo números)'),	
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



module.exports = validationsRegister;
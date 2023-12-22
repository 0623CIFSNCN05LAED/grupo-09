const { body } = require("express-validator");

const path = require("path");

const productValidations = [
    body("sku").notEmpty().withMessage("Ingrese SKU"),
    body("nombre").notEmpty().withMessage("Ingrese nombre"),
    body("precio").notEmpty().withMessage("Ingrese precio"),
    body("descripcion").notEmpty().withMessage("Ingrese descripcion"),
    body("ancho").notEmpty().withMessage("Ingrese ancho"),
    body("alto").notEmpty().withMessage("Ingrese alto"),
    body("profundidad").notEmpty().withMessage("Ingrese profundidad"),
    body("peso").notEmpty().withMessage("Ingrese peso"),
    body("marca_id").notEmpty().withMessage("Ingrese marca"),
    body("categoria_id").notEmpty().withMessage("Ingrese categoria"),
    body("imagen").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

        if (!file) {
            throw new Error('Seleccionar imagen');
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

module.exports = productValidations;
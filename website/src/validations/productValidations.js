const { body } = require("express-validator");

module.exports = [
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
        if (!req.file) {
            throw new Error("Cargue la imagen");
        }
        return true;
    }),
];
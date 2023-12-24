
const categoryService = require("../services/categoryService");
const brandService = require("../services/brandService");
const productService = require("../services/productService");

const { validationResult } = require("express-validator");

module.exports = async (req, res, next) => {
    const resultValidation = validationResult(req);
    
    const id = req.params.id;
    const productos = await productService.getProductDetail(id);
    const [categorias, marcas] = await Promise.all([categoryService.getAllCategories(), brandService.getAllBrands()]);

    if (resultValidation.errors.length > 0) {
        return res.render("productos/edit", {
            marcas,
            categorias,
            productos: productos,
            errors: resultValidation.mapped(),
            oldData: req.body,
        });
    }
    next();
};
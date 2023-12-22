
const categoriesService = require("../services/categoryService");
const brandService = require("../services/brandService");

const productService = require("../services/productService");

const { validationResult } = require("express-validator");

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const productos = await productService.getProductDetail(id);

    const resultValidation = validationResult(req);

    const [categoria, marca] = await Promise.all([categoriesService.getAllCategories(), brandService.getAllBrands()]);

    if (resultValidation.errors.length > 0) {
        return res.render("productos/edit", {
            marca,
            categoria,
            productos: productos,
            errors: resultValidation.mapped(),
            oldData: req.body,
        });
    }
    next();
};

const categoriesService = require("../services/categoryService");
const brandService = require("../services/brandService");

const { validationResult } = require("express-validator");

module.exports = async (req, res, next) => {
    const resultValidation = validationResult(req);

    const [categoria, marca] = await Promise.all([categoriesService.getAllCategories(), brandService.getAllBrands()]);

    if (resultValidation.errors.length > 0) {
        console.log("entroooooooooooo")
        return res.render("./productos/add", {
            marca,
            categoria,
            errors: resultValidation.mapped(),
            oldData: req.body,
        });
    }
    next();
};
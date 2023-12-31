const productService = require("../services/productService");
const brandService = require("../services/brandService");
const categoryService = require("../services/categoryService");

const productController = {

    add: async(req, res) => {
        const marcas = await brandService.getAllBrands();
        const categorias = await categoryService.getAllCategories();
        res.render("./productos/add", {marcas, categorias});
    },

    create: async(req, res) => {
        productService.createProduct(req.body, req.file)
        .then(() => {
            res.redirect("/productos/admin");
        });
    },

    edit: async(req, res) => {
        const marcas = await brandService.getAllBrands();
        const categorias = await categoryService.getAllCategories();

        productService.editProduct(req.params.id)
        .then((productos) => {
            res.render("./productos/edit", {productos, marcas, categorias});
        });
    },

    update: (req, res) => {
        productService.updateProduct(req.body, req.file, req.params.id)
        .then(() => {
            res.redirect("/productos/admin");
        });
    },

    delete: (req, res) => {
        productService.deleteProduct(req.params.id)
        .then((productos) => {
            res.render("./productos/delete", {productos});
        });
    },

    destroy: (req, res) => {
        productService.destroyProduct(req.params.id)
        .then(() => {
            res.redirect("/productos/admin");
        });
    },

    list: (req, res) => {
        productService.getAllProducts()
        .then(productos => {
            res.render("./productos/list.ejs", {productos})
        })
    },

    listAdmin: (req, res) => {
        productService.getAllProducts()
        .then(productos => {
            res.render("./productos/listAdmin.ejs", {productos})
        })
    },

    detail: (req, res) => {
        productService.getProductDetail(req.params.id)
        .then(productos => {
            res.render("./productos/detail.ejs", {productos})
        })
    },

    getByCategory: (req, res) => {
        productService.getByCategory(req.params.id)
        .then((productos) => {
            res.render("./productos/list.ejs", {productos});
        });
    },

    search: (req, res) => {
        productService.searchProducts(req.body)
        .then(productos => {
            res.render("./productos/list.ejs", {productos})
        })
    }, 

    cart: (req, res) => {
        res.render("./productos/cart.ejs");
    },

};

module.exports = productController;



const productService = require("../services/productService");

const productController = {

    add: (req, res) => {
        res.render("./productos/add");
    },

    createProduct: (req, res) => {
        productService.createProduct(req.body)
        .then(() => {
            res.redirect("/productos/admin");
        });
    },

    editProduct: (req, res) => {
        productService.editProduct(req.params.id)
        .then((productos) => {
            res.render('./productos/edit', {Productos:productos});
        });
    },

    updateProduct: (req, res) => {
        productService.updateProduct(req.body, req.params.id)
        .then(() => {
            res.redirect("/productos/admin");
        });
    },

    deleteProduct: (req, res) => {
        productService.deleteProduct(req.params.id)
        .then((productos) => {
            res.render('./productos/delete', {Productos:productos});
        });
    },

    destroyProduct: (req, res) => {
        productService.destroyProduct(req.params.id)
        .then(() => {
            res.redirect("/productos/admin");
        });
    },

    list: (req, res) => {
        productService.getAllProducts()
            .then(productos => {
                res.render('./productos/productList.ejs', {productos})
            })
    },

    listAdmin: (req, res) => {
        productService.getAllProducts()
            .then(productos => {
                res.render('./productos/productListAdmin.ejs', {productos})
            })
    },

    detail: (req, res) => {
        productService.getProductDetail(req.params.id)
            .then(productos => {
                res.render('./productos/productDetail.ejs', {productos})
            })
    },

    getByCategory: (req, res) => {
        productService.getByCategory(req.params.id)
        .then((productos) => {
            res.render('./productos/productList.ejs', {productos});
        });
    },

    productCart: (req, res) => {
        res.render("./productos/productCart.ejs");
    },

};

module.exports = productController;



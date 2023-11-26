
const db = require('../database/models');
const sequelize = db.sequelize;
 
const productService = require("../services/productService");

module.exports = {

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
                res.render('productList.ejs', {productos})
            })
    },

    listAdmin: (req, res) => {
        productService.getAllProductsAdmin()
            .then(productos => {
                res.render('productListAdmin.ejs', {productos})
            })
    },

    detail: (req, res) => {
        productService.getProductDetail(req.params.id)
            .then(productos => {
                res.render('productDetail.ejs', {productos})
            })
    },

    getByCategory: (req, res) => {
        productService.getByCategory(req.params.id)
        .then((productos) => {
            res.render('productList.ejs', {productos});
        });
    },
    
    /* listHeladeras: (req, res) => {
        productService.getAllHeladeras()
        .then((productos) => {
            res.render('productList.ejs', {productos});
        });
    },

    listLavarropas: (req, res) => {
        productService.getAllLavarropas()
        .then((productos) => {
            res.render('productList.ejs', {productos});
        });
    },

    listCocinas: (req, res) => {
        productService.getAllCocinas()
        .then((productos) => {
            res.render('productList.ejs', {productos});
        });
    },

    listMicroondas: (req, res) => {
        productService.getAllMicroondas()
        .then((productos) => {
            res.render('productList.ejs', {productos});
        });
    },

    listLavavajillas: (req, res) => {
        productService.getAllLavavajillas()
        .then((productos) => {
            res.render('productList.ejs', {productos});
        });
    },

    listHornos: (req, res) => {
        productService.getAllHornos()
        .then((productos) => {
            res.render('productList.ejs', {productos});
        });
    }, */

    productCart: (req, res) => {
        res.render("productCart.ejs");
    },

};




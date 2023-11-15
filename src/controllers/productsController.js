
const db = require('../database/models');
const sequelize = db.sequelize;
 
const productService = require("../services/productService");

module.exports = {

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
    
    listHeladeras: (req, res) => {
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
    },

    add: (req, res) => {
        res.render("./productos/add");
    },

    /*createProduct: (req, res) => {
        productService.createProduct()
        .then((productos) => {
            res.redirect("/productos/admin");
        });
    },*/

    'create': (req, res) => {
        db.Productos.create({
           sku: req.body.sku,
           nombre: req.body.nombre,
           descripcion: req.body.descripcion,
           precio: req.body.precio,
           ancho: req.body.ancho,
           alto: req.body.alto,
           profundidad: req.body.profundidad,
           peso: req.body.peso,
           imagen: req.body.imagen,
           marca_id: req.body.marca_id,
           categoria_id: req.body.categoria_id
        });
        res.redirect("/productos/admin");
    },

    'edit': (req, res) => {
        db.Productos.findByPk(req.params.id)
            .then(productos => {
                res.render('./productos/edit', {Productos:productos});
            });
    },

    'update': (req,res) => {
        db.Productos.update({
            sku: req.body.sku,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            ancho: req.body.ancho,
            alto: req.body.alto,
            profundidad: req.body.profundidad,
            peso: req.body.peso,
            imagen: req.body.imagen,
            marca_id: req.body.marca_id,
            categoria_id: req.body.categoria_id
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/productos/admin")

    },

    'delete':  (req, res) => {
        db.Productos.findByPk(req.params.id)
            .then(productos => {
                res.render('./productos/delete', {Productos:productos});
            });
    },
    
    'destroy': (req, res) => {
         db.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/productos/admin");
    }
};



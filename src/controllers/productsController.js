
const db = require('../database/models');
const sequelize = db.sequelize;
 
//Otra forma de llamar a los modelos
const Productos = db.Productos;

const productsController = {
    'listHeladeras': (req, res) => {
        db.Productos.findAll({
            where: {
              categoria_id: 1
            },
            order : [
                ['nombre', 'ASC']
            ],
            //limit: 5
        })
            .then(productos => {
                res.render('productList.ejs', {productos});
            });
    },
    'listLavarropas': (req, res) => {
        db.Productos.findAll({
            where: {
              categoria_id: 2
            },
            order : [
                ['nombre', 'ASC']
            ],
            //limit: 5
        })
            .then(productos => {
                res.render('productList.ejs', {productos});
            });
    },
    'listCocinas': (req, res) => {
        db.Productos.findAll({
            where: {
              categoria_id: 3
            },
            order : [
                ['nombre', 'ASC']
            ],
            //limit: 5
        })
            .then(productos => {
                res.render('productList.ejs', {productos});
            });
    },
    'listMicroondas': (req, res) => {
        db.Productos.findAll({
            where: {
              categoria_id: 4
            },
            order : [
                ['nombre', 'ASC']
            ],
            //limit: 5
        })
            .then(productos => {
                res.render('productList.ejs', {productos});
            });
    },
    'listLavavajillas': (req, res) => {
        db.Productos.findAll({
            where: {
              categoria_id: 5
            },
            order : [
                ['nombre', 'ASC']
            ],
            //limit: 5
        })
            .then(productos => {
                res.render('productList.ejs', {productos});
            });
    },
    'listHornos': (req, res) => {
        db.Productos.findAll({
            where: {
              categoria_id: 6
            },
            order : [
                ['nombre', 'ASC']
            ],
            //limit: 5
        })
            .then(productos => {
                res.render('productList.ejs', {productos});
            });
    },

    'list': (req, res) => {
        db.Productos.findAll()
            .then(productos => {
                res.render('productList.ejs', {productos})
            })
    },

    'listAdmin': (req, res) => {
        db.Productos.findAll()
            .then(productos => {
                res.render('productListAdmin.ejs', {productos})
            })
    },

    'anafes': (req,res)=>{
        res.render("./productos/anafes");
    },
    
    'heladeras': (req,res)=>{
        res.render("./productos/heladeras");
    },

    'cocinas': (req,res)=>{
        res.render("./productos/cocinas");
    },
    
    'freezers': (req,res)=>{
        res.render("./productos/freezers");
    },
    
    'lavarropas': (req,res)=>{
        res.render("./productos/lavarropas");
    },
    
    'lavavajillas': (req,res)=>{
        res.render("./productos/lavavajillas");
    },
    
    'microondas': (req,res)=>{
        res.render("./productos/microondas");
    }, 

    'add': (req, res) => {
        res.render("./productos/add");
    },

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
}

module.exports = productsController;


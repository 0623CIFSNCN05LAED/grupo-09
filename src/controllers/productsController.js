
const db = require('../database/models');
const sequelize = db.sequelize;
 
//Otra forma de llamar a los modelos
const Productos = db.Productos;

const productsController = {

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
           marca_id: req.body.marca_id,
           categoria_id: req.body.categoria_id
        });
        res.redirect("/");
    },

    'edit': (req, res) => {
        db.Productos.findByPk(req.params.id)
            .then(productos => {
                res.render('./productos/edit', {Productos:productos});
            });
    },

    'update': (req,res) => {
        db.Productos.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/productos/edit/" + req.params.id)

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
        res.redirect("/");
    }
}

module.exports = productsController;


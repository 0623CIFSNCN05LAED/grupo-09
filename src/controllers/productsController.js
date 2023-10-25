const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Productos = db.Productos;

const productsController={
    'add': (req, res) => {
        res.render("./productos/add");
    },
    'create': (req, res) => {
        db.Productos.create({
           sku: req.body.title,
           nombre: req.body.rating,
           descripcion: req.body.awards,
           precio: req.body.release_date,
           ancho: req.body.length,
           alto: req.body.genre_id,
           profundidad: req.body.length,
           peso: req.body.genre_id,
           marca_id: req.body.length,
           categoria_id: req.body.genre_id
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
const { Productos } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {

    /*createProduct: (req, res) => {
        return Productos.create({
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
    },*/

    getAllProducts: () => {
        return Productos.findAll();
    },

    getAllProductsAdmin: () => {
        return Productos.findAll();
    },

    getProductDetail: (id) => {
        return Productos.findByPk(id);
    },

    getAllHeladeras: () => {
        return Productos.findAll({
            where: {
                categoria_id: 1
            },
            order: [
                ['nombre', 'ASC']
            ],
            //limit: 5
        });
    },

    getAllLavarropas: () => {
        return Productos.findAll({
            where: {
                categoria_id: 2
            },
            order: [
                ['nombre', 'ASC']
            ],
            //limit: 5
        });
    },

    getAllCocinas: () => {
        return Productos.findAll({
            where: {
                categoria_id: 3
            },
            order: [
                ['nombre', 'ASC']
            ],
            //limit: 5
        });
    },

    getAllMicroondas: () => {
        return Productos.findAll({
            where: {
                categoria_id: 4
            },
            order: [
                ['nombre', 'ASC']
            ],
            //limit: 5
        });
    },

    getAllLavavajillas: () => {
        return Productos.findAll({
            where: {
                categoria_id: 5
            },
            order: [
                ['nombre', 'ASC']
            ],
            //limit: 5
        });
    },

    getAllHornos: () => {
        return Productos.findAll({
            where: {
                categoria_id: 6
            },
            order: [
                ['nombre', 'ASC']
            ],
            //limit: 5
        });
    },



};

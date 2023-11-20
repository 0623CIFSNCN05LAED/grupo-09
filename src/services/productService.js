const { Productos } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {

    createProduct: (data) => {
        return Productos.create({
           sku: data.sku,
           nombre: data.nombre,
           descripcion: data.descripcion,
           precio: data.precio,
           ancho: data.ancho,
           alto: data.alto,
           profundidad: data.profundidad,
           peso: data.peso,
           imagen: data.imagen,
           marca_id: data.marca_id,
           categoria_id: data.categoria_id
        });
    },

    updateProduct: (data, id) => {
        return Productos.update({
            sku: data.sku,
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            ancho: data.ancho,
            alto: data.alto,
            profundidad: data.profundidad,
            peso: data.peso,
            imagen: data.imagen,
            marca_id: data.marca_id,
            categoria_id: data.categoria_id
        }, {
            where: {
                id: id
            }
        });
    },

    destroyProduct: (id) => {
        return Productos.destroy({
            where: {
                id: id
            }
        });
    },

    editProduct: (id) => {
        return Productos.findByPk(id);
    },

    deleteProduct: (id) => {
        return Productos.findByPk(id);
    },

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
        });
    },

};

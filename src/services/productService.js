const { Productos } = require("../database/models");

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

    getByCategory: (categoryId) => {
        return Productos.findAll({
            where: {
                categoria_id: categoryId,
            },
            order: [["nombre", "ASC"]],
        });
    },

};

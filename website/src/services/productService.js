const { Productos } = require("../database/models");

module.exports = {

    createProduct: (data) => {
        return Productos.create({
           sku: data.sku,
           nombre: data.nombre,
           descripcion: data.descripcion,
           precio: data.precio,
           descuento: data.descuento,
           oferta: data.oferta,
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
            descuento: data.descuento,
            oferta: data.oferta,
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

    editProduct: (id) => {
        return Productos.findByPk(id);
    },

    destroyProduct: (id) => {
        return Productos.destroy({
            where: {
                id: id
            }
        });
    },

    deleteProduct: (id) => {
        return Productos.findByPk(id);
    },

    getAllProducts: () => {
        return Productos.findAll({ include: ['categorias', 'marcas'] });  // include: ["categoria", "marca"] hace referencia al alias de la asociaciones entre las claves foraneas de las tablas
    },

    getAllProductsAdmin: () => {
        return Productos.findAll({ include: ['categorias', 'marcas'] });
    },

    getProductDetail: (id) => {
        return Productos.findByPk(id, { include: ['categorias', 'marcas'] });
    },

    getByCategory: (categoryId) => {
        return Productos.findAll({
            include: ['categorias', 'marcas'],
            where: {
                categoria_id: categoryId,
            },
            order: [["nombre", "ASC"]],
        });
    },

    /* searchProducts: (query) => {
        const products = db.products
            .findAll()
            .filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        return formatProductsPrices(products);
    }, */

};

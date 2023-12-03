const productService = require("../../services/productServices");

const productsControllerAPI = {
    list: (req, res) => {

        productService.getAllProducts()
        .then(productos => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: productos.length,
                    url: "/api/productos",
                },
                data: productos,
            };
            res.json(respuesta);
        })
    },
};

module.exports = productsControllerAPI;
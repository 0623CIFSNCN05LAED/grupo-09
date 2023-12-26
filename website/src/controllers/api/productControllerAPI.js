const productService = require("../../services/productService");
 
const productsControllerAPI = {
    list: (req, res) => {
        productService.getAllProducts()
        .then(productos => {
            let respuesta = {
                meta: {
                    status: 200,
                   /*  total: productos.length, */
                    url: "/api/productos",
                },
                data: productos,
            };
            res.json(respuesta);
        })
    },

    detail: (req, res) => {
        productService.getProductDetail(req.params.id)
        .then(productos => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/productos/:id",
                },
                data: productos,
            };
            res.json(respuesta);
        })
    },
};

module.exports = productsControllerAPI;
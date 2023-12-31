const categoryService = require("../../services/categoryService");

const categoryControllerAPI = {
    list: (req, res) => {
        categoryService.getAllCategories()
        .then(categorias => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: categorias.length,
                    url: "/api/categorias",
                },
                data: categorias,
            };
            res.json(respuesta);
        })
    },
};

module.exports = categoryControllerAPI;
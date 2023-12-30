const userService = require("../../services/userService");

const productsControllerAPI = {
    list: (req, res) => {
        userService.getAllUsers()
        .then(usuarios => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/usuarios",
                },
                data: usuarios,
            };
            res.json(respuesta);
        })
    },

    detail: (req, res) => {
        userService.getUserDetail(req.params.id)
        .then(usuarios => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/usuarios/:id",
                },
                data: usuarios,
            };
            res.json(respuesta);
        })
    },
};

module.exports = productsControllerAPI;
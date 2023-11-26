const { Productos } = require("../database/models");

module.exports = {

    createUser: (data) => {
        return Usuarios.create({
           fullName: data.fullName,
           country: data.country,
           telefono: data.telefono,
           email: data.email,
           clave: data.clave,
           avatar: data.avatar
        });
    },


};

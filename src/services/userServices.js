const { Usuarios } = require("../database/models");
const bcryptjs = require('bcryptjs');

module.exports = {

    createUser: (data) => {
        return Usuarios.create({
           fullName: data.fullName,
           country: data.country,
           telefono: data.telefono,
           email: data.email,
           clave: bcryptjs.hashSync(data.password, 10),
           avatar: data.avatar
        });
    },

    getUserByEmail: async (data) => {
        return await Usuarios.findOne({
            where: {
                email: data
            }
        }); 
    }, 


};





const { Usuarios } = require("../database/models");
const bcryptjs = require('bcryptjs');

module.exports = {

    createUser: (data) => {
        console.log(data);
        return Usuarios.create({
           fullName: data.fullName,
           country: data.country,
           telefono: data.telefono,
           email: data.email,
           password: bcryptjs.hashSync(data.password, 10),
           avatar: bcryptjs.hashSync(data.avatar, 10),
           //avatar: data.avatar,
           rol_id: '2'
        });
    },

    getUserByEmail: async (data) => {
        return await Usuarios.findOne({
            where: {
                email: data
            }
        }); 
    }, 

    getAllUsers: () => {
        return Usuarios.findAll(); 
    },

    getUserDetail: (id) => {
        return Usuarios.findByPk(id); 
    },

};





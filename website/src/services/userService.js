const { Usuarios } = require("../database/models");
const bcryptjs = require('bcryptjs');

module.exports = {

    createUser: (data) => {
        return Usuarios.create({
           fullName: data.fullName,
           country: data.country,
           telefono: data.telefono,
           email: data.email,
           password: bcryptjs.hashSync(data.password, 10),
           avatar: data.avatarPath,
           rol_id: '2'
        });
    },

    editUser: (id) => {
        return Usuarios.findByPk(id);
    },

    updateUser: (data, id) => {
        return Usuarios.update({
           fullName: data.fullName,
           country: data.country,
           telefono: data.telefono,
           email: data.email,
           password: bcryptjs.hashSync(data.password, 10),
           avatar: bcryptjs.hashSync(data.avatar, 10),
           rol_id: '2'
        }, {
            where: {
                id: id
            }
        });
    },

    deleteUser: (id) => {
        return Usuarios.findByPk(id);
    },

    destroyUser: (id) => {
        return Usuarios.destroy({
            where: {
                id: id
            }
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
        return Usuarios.findAll({ include: ['roles'] }); 
    },

    getUserDetail: (id) => {
        return Usuarios.findByPk(id, { include: ['roles'] }); 
    },

};





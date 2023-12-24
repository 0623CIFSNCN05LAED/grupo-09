const { Usuarios } = require("../database/models");
const bcryptjs = require('bcryptjs');

module.exports = {

    createUser: (data, file) => {
        return Usuarios.create({
            fullName: data.fullName,
            country: data.country,
            telefono: data.telefono,
            email: data.email,
            password: bcryptjs.hashSync(data.password, 10),
            avatar: file.filename
        });
    },

    editUser: (id) => {
        return Usuarios.findByPk(id);
    },

    updateUser: (data, file, id) => {
        return Usuarios.update({
            fullName: data.fullName,
            country: data.country,
            telefono: data.telefono,
            email: data.email,
            password: bcryptjs.hashSync(data.password, 10), 
            /* password: data.password != '' ? bcryptjs.hashSync(data.password, 10) : getUserDetail(id).password,  */
            avatar: file ? file.filename : data.imagen
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





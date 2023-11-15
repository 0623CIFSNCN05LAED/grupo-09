const path = require("path");
const { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
 
//Otra forma de llamar a los modelos
//const Usuarios = db.Usuarios;

 

const registerController = { 

    register: (req, res) => {
        res.render("register");
    },

    /* registerCreate: async (req, res) => {
        console.log(req.body);
        await db.Usuarios.create({
            fullName: req.body.fullName,
            country: req.body.country,
            telefono: req.body.telefono,
            email: req.body.email,
            clave: req.body.clave,
            avatar: req.body.avatar
        });
        res.redirect("/");
    }, */

    processRegister: async (req, res) => {
     const resultValidation = validationResult(req);
     
     if (resultValidation.errors.length > 0) {
         return res.render('register', {
             errors: resultValidation.mapped(),
             oldData: req.body
         });
     } else {
        await db.Usuarios.create({
            fullName: req.body.fullName,
            country: req.body.country,
            telefono: req.body.telefono,
            email: req.body.email,
            clave: req.body.clave,
            avatar: req.body.avatar
        });
        res.redirect("/");
     }

 },

 
};

module.exports = registerController;
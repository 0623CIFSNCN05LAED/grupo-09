const path = require("path");
const { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
 
//Otra forma de llamar a los modelos
const Registros = db.Registros;

 

const registerController = { 

    register: (req, res) => {
        res.render("register");
    },

    registerCreate: (req, res) => {
        db.Registros.create({
    
            fullName: req.body.fullName,
            country: req.body.country,
            telefono: req.body.telefono,
            email: req.body.email,
            clave: req.body.clave,
            avatar: req.body.avatar
        });
        res.redirect("/");
    },
   
    processRegister: (req, res) => {
     const resultValidation = validationResult(req);
     
     if (resultValidation.errors.length > 0) {
         return res.render('register', {
             errors: resultValidation.mapped(),
             oldData: req.body
         });
     }

     return res.redirect('/');
 },

 
};

module.exports = registerController;
const path = require("path");
const { validationResult } = require('express-validator');
const db = require('../database/models');

const userController = { 

    register: (req, res) => {
        res.render("register");
    },

    createUser: (req, res) => {
        userService.createUser(req.body)
        .then(() => {
            res.redirect("login");
        });
    },
 
    login: (req, res) => {
        res.render("login");
    },

    guardarlogin: async (req, res) => {
        console.log(req.body);
        await db.Usuarios.create({
            
            email: req.body.email,
            clave: req.body.clave,
            
        });
        res.redirect("/");
    }, 

     /* processRegister: async (req, res) => {
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
    }, */


};

module.exports = userController;
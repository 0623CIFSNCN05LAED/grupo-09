const path = require("path");
const { validationResult } = require('express-validator');
const db = require('../database/models');

const userController = { 

    register: (req, res) => {
        res.render("register");
    },
 
    processRegister: async (req, res) => {
        
    
            await db.Usuarios.create({
                fullName: req.body.fullName,
                country: req.body.country,
                telefono: req.body.telefono,
                email: req.body.email,
                clave: req.body.clave,
                avatar: req.body.avatar
            });
            res.redirect("/");

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


};

module.exports = userController;
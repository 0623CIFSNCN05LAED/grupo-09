const path = require("path");
const { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;

 
const loginControlador={
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
}

module.exports = loginControlador;
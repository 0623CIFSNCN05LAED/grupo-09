const path = require("path");
const { validationResult } = require('express-validator');
 
const mainController = {
    home: (req, res) => {
        res.render("index");
    },

    productDetail: (req, res) => {
        res.render("productDetail");
    },

    productosCreate: (req, res) => {
        res.render("./productos/create");
    },

    productosEdit: (req, res) => {
        res.render("./productos/edit");
    },

    productosDelete: (req, res) => {
        res.render("./productos/delete");
    },

    
}

module.exports = mainController;

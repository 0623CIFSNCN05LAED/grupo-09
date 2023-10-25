const path = require("path");
const { validationResult } = require('express-validator');
 
const mainController = {
    home: (req, res) => {
        res.render("index");
    },

    productCart: (req, res) => {
        res.render("productCart");
    },

    productDetail: (req, res) => {
        res.render("productDetail");
    },

    productosCreate: (req, res) => {
        res.render("./productos/add");
    },

    productosEdit: (req, res) => {
        res.render("./productos/edit");
    },

    productosDelete: (req, res) => {
        res.render("./productos/delete");
    },

    anafes: (req,res)=>{
        res.render("./productos/anafes");
    },

    heladeras: (req,res)=>{
        res.render("./productos/heladeras");
    },

    cocinas: (req,res)=>{
        res.render("./productos/cocinas");
    },

    freezers: (req,res)=>{
        res.render("./productos/freezers");
    },

    lavarropas: (req,res)=>{
        res.render("./productos/lavarropas");
    },

    lavavajillas: (req,res)=>{
        res.render("./productos/lavavajillas");
    },

    microondas: (req,res)=>{
        res.render("./productos/microondas");
    }, 
}

module.exports = mainController;

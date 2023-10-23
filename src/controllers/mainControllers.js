const path = require("path");
const { validationResult } = require('express-validator');
 
const mainController = {
    home: (req, res) => {
        res.render("index");
    },
  
    login: (req, res) => {
        res.render("login");
    },
  
    guardarlogin: (req, res) => {
      return res.redirect("/")
    },

    register: (req, res) => {
       return res.render("register");
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

    productCart: (req, res) => {
        res.render("productCart");
    },

    productDetail: (req, res) => {
        res.render("productDetail");
    },

    productAdmin: (req, res) => {
        res.render("productAdmin");
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

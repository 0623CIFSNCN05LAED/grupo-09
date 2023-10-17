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

    anafes: (req,res)=>{

        res.render("anafes");
    },

    heladeras: (req,res)=>{

        res.render("heladeras");
    },


    cocinas: (req,res)=>{

        res.render("cocinas");
    },


    freezers: (req,res)=>{

        res.render("freezers");
    },


    lavarropas: (req,res)=>{

        res.render("lavarropas");
    },


    lavavajillas: (req,res)=>{

        res.render("lavavajillas");
    },


    microondas: (req,res)=>{

        res.render("microondas");
    },
    
}

module.exports = mainController;

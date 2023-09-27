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
        
      const resultValidation = validationResult(req);

      if(resultValidation.errors.length > 0){
        return res.render("login", {
 
         errors: resultValidation.mapped(),
         oldData : req.body,
         
        });
      }
     
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
}

module.exports = mainController;

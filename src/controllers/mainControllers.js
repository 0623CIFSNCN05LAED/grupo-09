const path = require("path");
const { validationResult } = require("express-validator");
 
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
         oldData : req.body

        });
      }
       res.redirect("/")
    },
 
    register: (req, res) => {
        res.render("register");
    },

    productCart: (req, res) => {
        res.render("productCart");
    },

    productDetail: (req, res) => {
        res.render("productDetail");
    },
}

module.exports = mainController;

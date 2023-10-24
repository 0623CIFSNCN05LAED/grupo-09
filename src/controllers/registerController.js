const path = require("path");
const { validationResult } = require('express-validator');



const registerController = { 
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
};

module.exports = registerController;
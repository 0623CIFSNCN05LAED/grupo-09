const path = require("path");
 
const mainController = {

  home: (req, res) => {
    res.render("index");
  },
  

  login: (req, res) => {
    res.render("login");

  },
  
  guardarlogin: (req, res) => {
   
   const login = {
    email: req.body.email,
    constraseña: req.body.constraseña
   }

   //Guardar const login
   
   res.redirect("/")
   //res.send(login)
   // res.render("login");

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

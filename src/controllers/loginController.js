const path = require("path");


const loginControlador={
    login: (req, res) => {
        res.render("login");
    },
    guardarlogin: (req, res) => {
        return res.redirect("/")
      },
}

module.exports = loginControlador;
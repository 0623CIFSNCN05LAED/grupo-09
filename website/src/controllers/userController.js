const userService = require("../services/userService");
const bcryptjs = require('bcryptjs');

const userController = { 

    register: (req, res) => {
        res.render("./usuarios/register");
    },

    registerProcess: (req, res) => {
        /*const errors = req.session.errors;
        const oldData = req.session.oldData;

        req.session.oldData = null;
        req.session.oldData = null;

        res.render('register', {
            errors: errors ? errors : null,
            oldData: oldData ? oldData : null,
        });*/

        userService.createUser(req.body, req.file)
        .then(() => {
            res.redirect("/login");
        });
    },
 
    login: (req, res) => {
        res.render("./usuarios/login");
    },

    loginProcess: async (req, res) => {
        const userToLogin = await userService.getUserByEmail(req.body.email);  // Devuelve los datos del usuario que coincidan con el email ingresado durante el proceso de login
    
        if (userToLogin) {
            const validPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);  // Compara el password ingresado durante el proceso de login, contra el pass encriptado en la base
        
            if (validPassword) {
                delete userToLogin.password;     
                req.session.userLogged = userToLogin; 
        
                if (req.body.rememberMe) {
                    res.cookie('email', req.body.email, { maxAge: 1000 * 60 * 2 });
                }

                if (req.session.userLogged.rol_tipo == 'Administrador') {
                    res.redirect("/productos/admin");
                } else {
                    res.redirect("/usuarios/profile");
                }
                /* return res.redirect('/usuarios/profile'); */

            } else {
                return res.render("./usuarios/login", {
                    errors: {
                        password: {
                            msg: "El usuario y/o contraseña ingresados son inválidos",
                        },
                    },
                });
            }
        } else {
            return res.render("./usuarios/login", {
                errors: {
                    email: {
                        msg: "El correo electrónico ingresado es inválido",
                    },
                },
            });
        }
    },

    logout: (req, res) => {
        res.clearCookie('email');
        req.session.destroy();
        res.redirect('/');
    },

    edit: (req, res) => {
        userService.editUser(req.params.id)
        .then((usuarios) => {
            res.render("./usuarios/edit", {usuarios});
        });
    },

    update: (req, res) => {
        userService.updateUser(req.body, req.file, req.params.id)
        .then(() => {
            req.session.destroy();
            res.redirect("/usuarios/profile");
        });
    },

    delete: (req, res) => {
        userService.deleteUser(req.params.id)
        .then((usuarios) => {
            res.render("./usuarios/delete", {usuarios});
        });
    },

    destroy: (req, res) => {
        userService.destroyUser(req.params.id)
        .then(() => {
            res.redirect("/");
        });
    },

    profile: async (req, res) => {
        res.render("./usuarios/profile", {
            usuarios: req.session.userLogged
        });
    },
 
};

module.exports = userController;
const userService = require("../services/userService");
const bcryptjs = require('bcryptjs');

const userController = { 

    registerForm: (req, res) => {
        res.render("register");
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

        userService.createUser(req.body)
        .then(() => {
            res.redirect("login");
        });
    },
 
    loginForm: (req, res) => {
        res.render("login");
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

                


                return res.redirect('/usuarios/profile');
            } else {
                return res.render('login', {
                    errors: {
                        password: {
                            msg: 'El usuario y/o contraseña ingresados son inválidos',
                        },
                    },
                });
            }
        } else {
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'El correo electrónico ingresado es inválido',
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

    editUser: (req, res) => {
        userService.editUser(req.params.id)
        .then((usuarios) => {
            res.render('./usuarios/edit', {Usuarios:usuarios});
        });
    },

    updateUser: (req, res) => {
        userService.updateUser(req.body, req.params.id)
        .then(() => {
            req.session.destroy();
            res.redirect("/login");
        });
    },

    deleteUser: (req, res) => {
        userService.deleteUser(req.params.id)
        .then((usuarios) => {
            res.render('./usuarios/delete', {Usuarios:usuarios});
        });
    },

    destroyUser: (req, res) => {
        userService.destroyUser(req.params.id)
        .then(() => {
            res.redirect("/");
        });
    },

    userProfile: async (req, res) => {
        res.render('profile', {
            user: req.session.userLogged
        });
    },
 
};

module.exports = userController;
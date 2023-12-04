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
        const userToLogin = await userService.getUserByEmail(req.body.email);
    
        if (userToLogin) {
            const validPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
        
            if (validPassword) {
                delete userToLogin.password;     
                req.session.userLogged = userToLogin;
        
                if (req.body.rememberMe) {
                    res.cookie('email', req.body.email, { maxAge: 1000 * 60 * 2 });
                }
                console.log(req.session.userLogged)
                return res.redirect('/usuarios/profile');
            }else{
                return res.render('login', {
                    errors: {
                        password: {
                            msg: 'El usuario y/o contraseña ingresados son inválidos',
                        },
                    },
                });
            }
        }else{
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

    userProfile: async (req, res) => {
        res.render('profile', {
            user: req.session.userLogged
        });
    },
 
};

module.exports = userController;

module.exports = (req, res, next) => {
    if (req.session && req.session.userLogged){
        if (req.session.userLogged.rol_tipo == 'Administrador') {
            res.redirect('/productos/admin');
        } else {
            res.redirect('/usuarios/profile');
        }
    }
    next();   
};






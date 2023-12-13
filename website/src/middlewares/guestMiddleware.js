module.exports = (req, res, next) => {
    if (req.session && req.session.userLogged){
        if (req.session.userLogged.rol_id == 1) {
            res.redirect('/productos/admin');
        } else {
            res.redirect('/usuarios/profile');
        }
    }
    next();   
};







module.exports = (req, res, next) => {
    if (req.session && !req.session.userLogged) {
        return res.redirect('/login');
    }
    next();
};


/*module.exports = (req, res, next) => {
    if (req.session && req.session.userLogged) {
        if (req.session.userLogged.rol_id == 1) {
            return res.redirect('/productos/admin');
        } else {
            return res.redirect('/login');
        }
    } else {
        return res.redirect('/');
    }

    next();
 
}; */



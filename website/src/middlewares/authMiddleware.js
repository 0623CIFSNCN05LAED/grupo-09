
module.exports = (req, res, next) => {
    if (req.session && !req.session.userLogged) {
        return res.redirect('/login');
    }
    next();
};




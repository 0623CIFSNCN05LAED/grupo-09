module.exports = (req, res, next) => {
    if (req.session && req.session.userLogged){
        return res.redirect('/usuarios/profile');
    }
    next();   
};


/* module.exports = async (req, res, next) => {
    if (!req.session.userInfo) {
        next();
    } else {
        const userInfo = req.session.userInfo;
        const email = userInfo.user_name;
        const user = await userService.userByEmail(email);
        const user_id = user.id;
        res.redirect("/users/" + user_id);
    }
};  */

/* module.exports = (req, res, next) => {
    if (req.session.userLogged) {
        return res.redirect('/users/myprofile');
    }
    next();
};  */



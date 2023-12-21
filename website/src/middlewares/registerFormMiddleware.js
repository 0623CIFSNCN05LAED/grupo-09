const { validationResult } = require('express-validator')

module.exports = (req, res, next) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {

        /* let email = null;
        const userLogged = req.session.userLogged;

        if (userLogged) {
            email = userLogged.email;
        } */

        return res.render('./usuarios/register', {
            errors: resultValidation.mapped(),
            oldData: req.body,
            email: req.session?.userLogged?.email,
        });
    }
    
    next()
}

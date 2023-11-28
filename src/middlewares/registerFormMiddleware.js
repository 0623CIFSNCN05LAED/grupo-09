const { validationResult } = require('express-validator')

module.exports = (req, res, next) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {

        console.log('entrooooo error validacion registro')

        return res.render('register', {
            errors: resultValidation.mapped(),
            oldData: req.body
            
        });
    }
    
    next()
}



/*let userEmail = null;
const userLogged = req.session.userLogged;

if (userLogged) {
    userEmail = userLogged.email;
}*/

/*userEmail,*/
const { validationResult } = require('express-validator')
const userService = require("../services/userService");

module.exports = async(req, res, next) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
        const id = req.params.id;
        const usuarios = await userService.getUserDetail(id);

        return res.render('./usuarios/edit', {
            errors: resultValidation.mapped(),
            usuarios: usuarios,
            oldData: req.body,
            /* email: req.session?.userLogged?.email, */
        });
    }
    
    next()
}

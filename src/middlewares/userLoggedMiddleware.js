const userServices = require("../services/userServices");  // true

module.exports = async (req, res, next) => {       // true
    res.locals.isLogged = false;                   // true

    /* const emailInCookie = req.cookies.email;                                    // true    
    const userFromCookie = await userServices.getUserByEmail(emailInCookie);    // true

    if (userFromCookie) {                         // true
         req.session.userLogged = userFromCookie;    // true
    } */
  
    if (req.session && req.session.userLogged) {       // true
        res.locals.isLogged = true;                      // true
        res.locals.userLogged = req.session.userLogged;  // true 
    } else {
        
    }
  
    next();
}; 



const { Router } = require("express");
const loginController = require("../controllers/loginController");
 
const router = Router();


router.get("/login", loginController.login);
router.post("/login",loginController.guardarlogin);

module.exports = router;
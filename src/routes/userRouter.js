const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

const uploadFile = require('../middlewares/multerUserMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

const loginValidations = require('../validations/loginValidations');
const registerValidations = require('../validations/registerValidation');

const loginFormMiddleware = require('../middlewares/loginFormMiddleware');
const registerFormMiddleware = require('../middlewares/registerFormMiddleware');

router.get("/login/", guestMiddleware, userController.loginForm);
router.post("/login/", loginValidations, loginFormMiddleware, userController.loginProcess);
router.get("/logout/", userController.logout);

router.get("/register/", guestMiddleware, userController.registerForm);
router.post("/register/", uploadFile.single("avatar"), registerValidations, registerFormMiddleware, userController.registerProcess);


router.get("/usuarios/profile", authMiddleware, userController.userProfile);

/* router.get('/edit/:id', authMiddleware, adminMiddleware, usersController.editProfileCrud);
router.put('/update/:id', uploadFile.single('avatar'), authMiddleware, adminMiddleware, usersController.update);

router.get('/delete/:id', authMiddleware, userController.deleteForm);
router.delete('/destroy/:id', authMiddleware, userController.destroy); */
/*const adminMiddleware = require('../middlewares/adminMiddleware'); */////////????????

module.exports = router;
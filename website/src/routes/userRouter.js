const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

const uploadFile = require('../middlewares/multerUserMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

const loginValidations = require('../validations/loginValidations');
const registerValidations = require('../validations/registerValidation');
const userValidations = require('../validations/userValidation');

const loginFormMiddleware = require('../middlewares/loginFormMiddleware');
const registerFormMiddleware = require('../middlewares/registerFormMiddleware');
const userEditMiddleware = require('../middlewares/userEditMiddleware');

router.get("/login", guestMiddleware, userController.login);
router.post("/login", loginValidations, loginFormMiddleware, userController.loginProcess);
router.get("/logout", userController.logout);

router.get("/register", guestMiddleware, userController.register);
router.post("/register", uploadFile.single("avatar"), registerValidations, registerFormMiddleware, userController.registerProcess);

router.get("/profile", authMiddleware, userController.profile);

router.get('/edit/:id', authMiddleware, userController.edit);
router.post('/update/:id', uploadFile.single("avatar"), userValidations, userEditMiddleware, authMiddleware, userController.update);

router.get('/delete/:id', authMiddleware, userController.delete);
router.post('/destroy/:id', authMiddleware, userController.destroy);

module.exports = router;
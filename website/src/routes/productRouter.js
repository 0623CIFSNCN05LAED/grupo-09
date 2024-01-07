const { Router } = require("express");
const router = Router();
const productController = require("../controllers/productController");
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const addProductMiddleware = require('../middlewares/addProductMiddleware');
const editProductMiddleware = require('../middlewares/editProductMiddleware');
const productValidations = require('../validations/productValidations');
const productEditValidations = require('../validations/productValidations');
const uploadFile = require('../middlewares/multerProductMiddleware');

router.get('/', productController.list);
router.get('/detail/:id', productController.detail);
router.get('/admin', adminMiddleware, productController.listAdmin);

router.get('/new', adminMiddleware, productController.add);
router.post('/create', uploadFile.single("imagen"), productValidations, addProductMiddleware, adminMiddleware, productController.create);
/* router.get('/edit/:id', productEditValidations, adminMiddleware, productController.edit); */
router.get('/edit/:id', adminMiddleware, productController.edit);
router.post('/update/:id', uploadFile.single("imagen"), productEditValidations, editProductMiddleware, adminMiddleware, productController.update);
router.get('/delete/:id', adminMiddleware, productController.delete);
router.post('/destroy/:id', adminMiddleware, productController.destroy);

router.get("/categoria/:id", productController.getByCategory);

router.post("/search", productController.search);

router.get("/cart", productController.cart);

module.exports = router;
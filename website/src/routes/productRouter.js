const { Router } = require("express");
const router = Router();
const productController = require("../controllers/productController");
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const addProductMiddleware = require('../middlewares/addProductMiddleware');
const editProductMiddleware = require('../middlewares/editProductMiddleware');
const productValidations = require('../validations/productValidations');
const uploadFile = require('../middlewares/multerProductMiddleware');

router.get('/', productController.list);
router.get('/detail/:id', productController.detail);
router.get('/admin', adminMiddleware, productController.listAdmin);

router.get('/new', productValidations, adminMiddleware, productController.add);
router.post('/create', uploadFile.single("imagen"), productValidations, addProductMiddleware, adminMiddleware, productController.createProduct);
router.get('/edit/:id', productValidations, adminMiddleware, productController.editProduct);
router.post('/update/:id', adminMiddleware, productController.updateProduct);
router.get('/delete/:id', adminMiddleware, productController.deleteProduct);
router.post('/destroy/:id', adminMiddleware, productController.destroyProduct);

router.get("/categoria/:id", productController.getByCategory);

router.get("/productCart", guestMiddleware, productController.productCart);

module.exports = router;
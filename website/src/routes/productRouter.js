const { Router } = require("express");
const router = Router();
const productController = require("../controllers/productController");
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const addProductMiddleware = require('../middlewares/addProductMiddleware');
const editProductMiddleware = require('../middlewares/editProductMiddleware');
const productValidations = require('../validations/productValidations');

router.get('/', productController.list);
router.get('/detail/:id', productController.detail);
router.get('/admin', adminMiddleware, productController.listAdmin);

router.get('/new', adminMiddleware, productController.add);
router.post('/create', adminMiddleware, productValidations, addProductMiddleware, productController.createProduct);
router.get('/edit/:id', adminMiddleware, productController.editProduct);
router.post('/update/:id', adminMiddleware, productController.updateProduct);
router.get('/delete/:id', adminMiddleware, productController.deleteProduct);
router.post('/destroy/:id', adminMiddleware, productController.destroyProduct);

router.get("/categoria/:id", productController.getByCategory);

router.get("/productCart", guestMiddleware, productController.productCart);

module.exports = router;
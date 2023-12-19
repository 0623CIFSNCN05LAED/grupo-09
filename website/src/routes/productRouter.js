const { Router } = require("express");
const router = Router();
const productController = require("../controllers/productController");
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const addProductMiddleware = require('../middlewares/addProductMiddleware');
const editProductMiddleware = require('../middlewares/editProductMiddleware');
const productValidations = require('../validations/productValidations');

router.get('/productos', productController.list);
router.get('/productos/detail/:id', productController.detail);
router.get('/productos/admin', adminMiddleware, productController.listAdmin);

router.get('/productos/new', adminMiddleware, productController.add);
router.post('/productos/create', adminMiddleware, productValidations, addProductMiddleware, productController.createProduct);
router.get('/productos/edit/:id', adminMiddleware, productController.editProduct);
router.post('/productos/update/:id', adminMiddleware, productController.updateProduct);
router.get('/productos/delete/:id', adminMiddleware, productController.deleteProduct);
router.post('/productos/destroy/:id', adminMiddleware, productController.destroyProduct);

router.get("/productos/categoria/:id", productController.getByCategory);

router.get("/productCart", guestMiddleware, productController.productCart);

module.exports = router;
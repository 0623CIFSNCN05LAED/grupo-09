const { Router } = require("express");
const router = Router();
const productController = require("../controllers/productController");

router.get('/productos', productController.list);
router.get('/productos/detail/:id', productController.detail);
router.get('/productos/admin', productController.listAdmin);

router.get('/productos/new', productController.add);
router.post('/productos/create', productController.createProduct);
router.get('/productos/edit/:id', productController.editProduct);
router.post('/productos/update/:id', productController.updateProduct);
router.get('/productos/delete/:id', productController.deleteProduct);
router.post('/productos/destroy/:id', productController.destroyProduct);

router.get("/productos/categoria/:id", productController.getByCategory);

router.get("/productCart", productController.productCart);

module.exports = router;
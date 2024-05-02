const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//api/product
router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.put('/:id', productController.modifyProduct);
router.get('/:id', productController.getProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
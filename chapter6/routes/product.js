const {createProduct, getProduct, getProductById, updateProduct, destroyProduct} = require('../controller/product.js')
const router = require('express').Router();

router.get('/product', getProduct);
router.get('/product/:id', getProductById);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', destroyProduct);

module.exports = router;
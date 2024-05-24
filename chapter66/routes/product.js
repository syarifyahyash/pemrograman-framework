const prod = require('../controllers/product.js')
const router = require('express').Router();

router.get('/product', prod.getProduct);
router.get('/product/:id', prod.getProductById);
router.post('/product', prod.createProduct);
router.put('/product/:id', prod.updateProduct);
router.delete('/product/:id', prod.destroyProduct);

module.exports = router;
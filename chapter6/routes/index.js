const router = require('express').Router();
const customer = require('./customer');
const product = require('./product');
const transaksi = require('./transaksi');

router.use('/', customer);
router.use('/', product);
router.use('/', transaksi);


module.exports = router;
const router = require('express').Router();
const trans = require('./transaksi');
const prod = require('./product');
const cust = require('./customer');

router.use('/', trans);
router.use('/', prod);
router.use('/', cust);

module.exports = router;
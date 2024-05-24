const router = require('express').Router();
const trans = require('../controllers/transaksi.js');

router.post('/transaksi', trans.createTransaction);
router.delete('/transaksi/:id', trans.deleteTransaction);
router.put('/transaksi/:id', trans.updateTransaction);

module.exports = router;

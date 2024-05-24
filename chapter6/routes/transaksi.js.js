const {createTransaksi, getTransaksi, getTransaksiById, updateTransaksi, destroyTransaksi} = require('../controller/transaksi.js')
const router = require('express').Router();

router.get('/transaksi', getTransaksi);
router.get('/transaksi/:id', getTransaksiById);
router.post('/transaksi', createTransaksi);
router.put('/transaksi/:id', updateTransaksi);
router.delete('/transaksi/:id', destroyTransaksi);

module.exports = router;
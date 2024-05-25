const router = require('express').Router();
const trans = require('../controllers/transaksi.js');

router.post('/transaksi', trans.createTransaction);
router.delete('/transaksi/:id', trans.deleteTransaction);
router.put('/transaksi/:id', trans.updateTransaction);
router.get('/total-pembelian', trans.getTotalPurchases);
router.get('/product-favorit', trans.getFavoriteProduct);
router.get('/top-customers', trans.getTopCustomers);
router.get('/product-kurang', trans.getLowStockProducts);
router.get('/dashboard', trans.getDashboardData);
router.get('/avg-customer-age', trans.getAverageCustomerAge);
router.get('/gender-most-trans', trans.getGenderMostTransactions);

module.exports = router;

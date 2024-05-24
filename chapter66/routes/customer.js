const router = require('express').Router();
const customerController = require('../controllers/customer.js');

router.post('/customer', customerController.createCustomer);
router.get('/customer', customerController.getCustomers);
router.get('/customer/:id', customerController.getCustomerById);
router.put('/customer/:id', customerController.updateCustomer);
router.delete('/customer/:id', customerController.deleteCustomer);

module.exports = router;

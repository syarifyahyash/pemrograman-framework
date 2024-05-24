const {createCustomer, getCustomer, getCustomerById, updateCustomer, destroyCustomer} = require('../controller/customer.js')
const router = require('express').Router();

router.get('/customer', getCustomer);
router.get('/customer/:id', getCustomerById);
router.post('/customer', createCustomer);
router.put('/customer/:id', updateCustomer);
router.delete('/customer/:id', destroyCustomer);

module.exports = router;
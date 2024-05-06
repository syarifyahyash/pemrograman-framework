const router = require('express').Router();
const fakultas = require('./fakultas');

router.use('/', fakultas);

module.exports = router;
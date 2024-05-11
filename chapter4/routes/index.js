const router = require('express').Router();
const fakultas = require('./fakultas');
const galeri = require('./galeri');

router.use('/', fakultas);
router.use('/', galeri);

module.exports = router;
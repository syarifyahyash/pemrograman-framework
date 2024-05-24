const router = require('express').Router();
const fakultas = require('./fakultas');
const prodi = require('./prodi');
const testimoni = require('./testimoni');

router.use('/', fakultas);
router.use('/', prodi);
router.use('/', testimoni);

module.exports = router;
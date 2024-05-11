const {createProdi, getProdi, getProdiById, updateProdi, destroyProdi} = require('../controller/prodi');
const router = require('express').Router();

router.get('/prodi', getProdi);
router.get('/prodi/:id', getProdiById);
router.post('/prodi', createProdi);
router.put('/prodi/:id', updateProdi);
router.delete('/prodi/:id', destroyProdi);

module.exports = router;
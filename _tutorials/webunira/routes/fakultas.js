const {createFakultas, getFakultas, getFakultasById, updateFakultas, destroyFakultas} = require('../controller/fakultas.js')
const router = require('express').Router();

router.get('/fakultas', getFakultas);
router.get('/fakultas/:id', getFakultasById);
router.post('/fakultas', createFakultas);
router.put('/fakultas/:id', updateFakultas);
router.delete('/fakultas/:id', destroyFakultas);

module.exports = router;
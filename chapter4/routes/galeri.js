const {getGaleri,getGaleriById,createGaleri, updateGaleri,destroyGaleri} = require('../controller/galeri');
const router = require('express').Router();

router.get('/galeri', getGaleri);
router.get('/galeri/:id', getGaleriById);
router.post('/galeri', createGaleri);
router.put('/galeri/:id', updateGaleri);
router.delete('/galeri/:id', destroyGaleri);

module.exports = router;
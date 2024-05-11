const testimoni = require('../controller/testimoni');
const router = require('express').Router();
const multer = require('multer');
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${new Date().getTime()}-${file.originalname}`);
  }
});

const upload = multer({ storage: diskStorage })

router.post('/testimoni', testimoni.createTestimoni);
router.get('/testimoni', testimoni.getTestimoni);
router.get('/testimoni/:id', testimoni.getTestimoniById);
router.put('/testimoni/:id', testimoni.updateTestimoni);
router.put('/foto/testimoni/:id', upload.single('foto-testmoni'), testimoni.updateFotoTestimoni);
router.delete('/testimoni/:id', testimoni.destroyTestimoni);

module.exports = router;
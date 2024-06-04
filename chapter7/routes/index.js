const router = require('express').Router();
const bcrypt = require('bcrypt');
const { generateToken, decodeToken } = require('../helpers/token');
const auth = require('../controllers/auth');


router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'welcome to my api'
  });
});

router.post('/login', auth.login );
router.post('/registration', auth.registration );
router.get('/saya', auth.saya );




module.exports = router;
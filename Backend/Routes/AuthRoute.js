const express = require('express');
const { UserRegister } = require('../Controllers/registerController');
const router = express.Router();

router.post('/register',UserRegister);
router.post('/login',)

module.exports = router;

const express = require('express');
const router = express.Router();
const loginAndRegisterController = require('../controllers/loginAndregisterController');

router.post('/login', loginAndRegisterController.login);

module.exports = router;


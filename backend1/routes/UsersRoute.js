const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

router.post('/login', UsersController.login);

module.exports = router;


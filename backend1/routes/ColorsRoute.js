const express = require('express');
const router = express.Router();
const ColorsController = require('../controllers/ColorsController');

router.get('/get-all-colors', ColorsController.getAllColors);

module.exports = router;
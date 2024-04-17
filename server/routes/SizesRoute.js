const express = require('express');
const router = express.Router();
const SizesController = require('../controllers/SizesController');

router.get('/get-all-size',SizesController.getAllSizes);

module.exports = router;
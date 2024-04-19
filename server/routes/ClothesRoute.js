const express = require('express');
const router = express.Router();
const ClothesController = require('../controllers/ClothesController');

router.get('/get-all-clothes',ClothesController.getAllClothes);
router.get('/filter-clothes',ClothesController.filterClothes);

module.exports = router;
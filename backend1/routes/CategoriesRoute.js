const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/CategoriesController');

router.get('/get-all-categories',CategoriesController.getAllCategories);
router.get('/:categoryId',CategoriesController.getSingleCategories);

module.exports = router;
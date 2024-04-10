const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.post('/add-to-cart/:cartId',dashboardController.addToCart);
router.get('/single-cart/:cartId',dashboardController.findSingleCart);
router.delete('delete-in-cart/:cartId',dashboardController.deleteInCart);

module.exports = router;
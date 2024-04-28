const express = require('express');
const router = express.Router();
const CartsController = require('../controllers/CartsController');

router.post('/add-to-cart/:cartId',CartsController.addToCart);
router.get('/single-cart/:cartId',CartsController.findSingleCart);
router.delete('delete-in-cart/:cartId',CartsController.deleteInCart);

module.exports = router;
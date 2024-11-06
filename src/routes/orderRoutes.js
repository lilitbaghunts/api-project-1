const express = require('express');
const {
  createOrder,
  getUserOrders,
  getOrderById,
} = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, createOrder);
router.get('/', auth, getUserOrders);
router.get('/:id', auth, getOrderById);

module.exports = router;

const express = require('express');
const router = express.Router();
const { jwtValidate } = require('../../utils/jwtValidate');

const orderController = require('./controller/orderController')

router.post('/create-order', jwtValidate, orderController.createOrder)

router.get('/order-history',jwtValidate, orderController.orderHistory)

module.exports = router

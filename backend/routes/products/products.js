var express = require('express');
var router = express.Router();

const productController = require('./controller/productsController');
const { jwtValidate } = require('../../utils/jwtValidate');

//USER
router.get('/all-product', productController.allProduct);

router.get('/product/:id', productController.oneProduct);

module.exports = router;

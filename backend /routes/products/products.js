var express = require('express');
var router = express.Router();

const productController = require('../products/controller/productsController')
const {jwtValidate } = require('../../utils/jwtValidate')


//USER
router.get('/all-product',jwtValidate,productController.allProduct)

router.get('/product/:id',jwtValidate,productController.oneProduct)




module.exports = router;
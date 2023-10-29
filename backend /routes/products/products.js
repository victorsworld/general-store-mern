var express = require('express');
var router = express.Router();

const productController = require('../products/controller/productsController')
const {jwtValidate } = require('../../utils/jwtValidate')


//USER
router.get('/all-product',productController.allProduct)

router.get('/product/:id',productController.oneProduct)




module.exports = router;
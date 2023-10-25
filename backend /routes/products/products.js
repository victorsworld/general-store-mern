var express = require('express');
var router = express.Router();

const productController = require('../products/controller/productsController')
const {jwtValidate } = require('../../utils/jwtValidate')


//ADMIN
router.post('/create-item', productController.createProduct )

router.put('/edit-item/:id',productController.editProduct)

router.delete('/delete-item/:id', productController.deleteProduct)

//USER
router.get('/all-product',productController.allProduct)

router.get('/product/:id',productController.oneProduct)




module.exports = router;
var express = require('express');
var router = express.Router();

const adminController = require('../admin/adminController')
const {jwtValidate } = require('../../utils/jwtValidate')


//ADMIN
router.post('/create-item',jwtValidate, productController.createProduct )

router.put('/edit-item/:id',jwtValidate,productController.editProduct)

router.delete('/delete-item/:id',jwtValidate, productController.deleteProduct)
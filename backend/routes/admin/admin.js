var express = require('express');
var router = express.Router();
const adminController = require('./adminController');
const { jwtValidate } = require('../../utils/jwtValidate');

//ADMIN
router.post('/create-item', jwtValidate, adminController.createProduct);

router.put('/edit-item/:id', jwtValidate, adminController.editProduct);

router.delete('/delete-item/:id', jwtValidate, adminController.deleteProduct);

module.exports = router;

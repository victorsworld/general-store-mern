var express = require('express');
var router = express.Router();
const {jwtValidate } = require('../../utils/jwtValidate')
const userController = require('./controller/userController')
const { validateUserData } = require('../../utils/validateUserData')
const { checkIfEmpty } = require('../../utils/checkIfEmpty')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', checkIfEmpty, validateUserData, userController.register );

router.post('/login',checkIfEmpty, validateUserData, userController.login);

router.get('/validate',jwtValidate, validateUserData, userController.validate )

module.exports = router;

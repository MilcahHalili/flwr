var express = require('express');
var router = express.Router();
var User = require('../../controllers/users');
var usersCtrl = require('../../controllers/users');

/*--- Public Routes ---*/
router.post('/signup',usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;
var express = require('express');
var router = express.Router();
var msgCtrl = require('../../controllers/message');

/*--- Public Routes ---*/
router.post('/message/send', msgCtrl.signup);

module.exports = router;
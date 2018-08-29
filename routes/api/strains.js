var express = require('express');
var router = express.Router();
var strainsCtrl = require('../../controllers/strains');

/*--- Public Routes ---*/
router.post('/createStrain', strainsCtrl.create);
router.post('/:id', strainsCtrl.show);

module.exports = router;
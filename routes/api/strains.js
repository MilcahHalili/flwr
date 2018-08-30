var express = require('express');
var router = express.Router();
var strainsCtrl = require('../../controllers/strains');

/*--- Public Routes ---*/
router.post('/add-strain', strainsCtrl.create);
router.post('/:id', strainsCtrl.show);

module.exports = router;
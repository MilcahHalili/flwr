var express = require('express');
var router = express.Router();
var strainsCtrl = require('../../controllers/strains');

/*--- Public Routes ---*/
router.get('/', strainsCtrl.all);
router.post('/', strainsCtrl.addStrain);
router.get('/:id', strainsCtrl.show);
router.get('/mood', strainsCtrl.forMoods);

module.exports = router;
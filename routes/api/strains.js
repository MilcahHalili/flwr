var express = require('express');
var router = express.Router();
var strainsCtrl = require('../../controllers/strains');

/*--- Public Routes ---*/
router.post('/', strainsCtrl.addStrain);
router.get('/', strainsCtrl.all);
router.post('/:id', strainsCtrl.show);
router.get('/mood', strainsCtrl.forMoods);

module.exports = router;
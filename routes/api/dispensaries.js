var express = require('express');
var router = express.Router();
var dispensariesCtrl = require('../../controllers/dispensaries');

/*--- Public Routes ---*/
router.post('/createdispensary', dispensariesCtrl.create);
router.get('/:id', dispensariesCtrl.show);
router.post('/:dispensaryId/strains/:strainId', dispensariesCtrl.createStock);
router.delete('/:dispensaryId/strains/:strainId', dispensariesCtrl.removeeStock);

module.exports = router;
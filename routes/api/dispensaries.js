var express = require('express');
var router = express.Router();
var dispensariesCtrl = require('../../controllers/dispensaries');

/*--- Public Routes ---*/
router.post('/dispensary', dispensariesCtrl.create);
router.get('/:id', dispensariesCtrl.show);
router.post('/:dispensaryId/strains/:strainId', dispensariesCtrl.createStock);
router.delete('/:dispensaryId/strains/:strainId', dispensariesCtrl.removeStock);

module.exports = router;
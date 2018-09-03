var express = require('express');
var router = express.Router();
var dispenCtrl = require('../../controllers/dispensaries');

/*--- Public Routes ---*/
router.post('/', dispenCtrl.create);
router.get('/:id', dispenCtrl.show);
router.get('/:id/strains/new', barsCtrl.newStock);
router.post('/:dispenId/strains/:strainId', dispenCtrl.createStock);
router.delete('/:dispenId/strains/:strainId', dispenCtrl.deleteStock);

module.exports = router;
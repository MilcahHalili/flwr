var Dispensary = require('../models/dispensary');
var Strain = require('../models/strain');

function create(req, res) {
  var dispensary = new Dispensary(req.body);
  dispensary.save(err => {
    res.redirect('/dispensary/:dispensary_id');
  });
}

function show(req, res) {
  Dispensary.findById(req.params.id).populate('strains').exec((err, dispensary) => {
    res.render('/dispensary/:dispensary_id', {pageTitle: dispensary.name, dispensary});
  });
}

function createStock(req, res) {
  Dispensary.findById(req.params.dispensaryId, (err, dispensary) => {
    dispensary.strains.push(req.params.strainId);
    dispensary.save(() => {
      Strain.findById(req.params.strainId, (err, strain) => {
        strain.dispensaries.push(req.params.dispensaryId);
        strain.save(() => {
          res.redirect(`/dispensaries/${dispensary.id}`);
        });
      });
    });
  });
}

function removeStock(req, res) {
  Dispensary.findById(req.params.dispensaryId, (err, dispensary) => {
    dispensary.strains.remove(req.params.strainId);
    dispensary.save(() => {
      Strain.findById(req.params.strainId, (err, strain) => {
        strain.dispensaries.remove(req.params.dispensaryId);
        strain.save(() => {
          res.redirect(`/dispensaries/${dispensary.id}`);
        });
      });
    });
  });
}

module.exports = {
  create,
  show,
  createStock,
  removeStock
}
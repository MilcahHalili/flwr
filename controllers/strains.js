var Strain = require('../models/strain');

function show(req, res) {
  Strain.findById(req.params.id).populate('dispensaries').exec((err, strain) => {
    res.render('strains/show', {pageTitle: strain.name, strain});
  });
}

function create(req, res) {
  var strain = new Strain(req.body);
  strain.save(err => {
    res.redirect(`/strains/${strain.id}`);
  })
}

module.exports = {
  create,
  show
}
var Strain = require('../models/strain');

function addStrain(req, res) {
  req.body.categories = req.body.categories.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.categories) req.body.categories = req.body.categories.split(',');
  req.body.moods = req.body.moods.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.moods) req.body.moods = req.body.moods.split(',');
  var strain = new Strain(req.body);
  strain.save(err => {
    res.json(strain);
  });
}

function all(req, res) {
  Strain.find({}, function(err, strains) {
    res.json(strains);
  });
}

function show(req, res) {
  Strain.findById(req.params.id).populate('dispensaries').exec((err, strain) => {
    res.render('strains/show', {pageTitle: strain.name, strain});
  });
}

function forMoods(req, res) {
  Strain.find({moods: req.body.moods}, (err, strains) => {
    res.json(strains);
  });
}

module.exports = {
  addStrain,
  all,
  show,
  forMoods
}
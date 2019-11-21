var Strain = require('../models/strain');
var User = require('../models/user');

function addStrain(req, res) {
  req.body.categories = req.body.categories.replace(/\s*,\s*/g, ',');
  if (req.body.categories) req.body.categories = req.body.categories.split(',');
  if (req.body.categories) req.body.categories = req.body.categories.join(', ');
  req.body.moods = req.body.moods.replace(/\s*,\s*/g, ',');
  if (req.body.moods) req.body.moods = req.body.moods.split(',');
  if (req.body.moods) req.body.moods = req.body.moods.join(', ');
  req.body.dispensaries = req.body.dispensaries.replace(/\s*,\s*/g, ',');
  if (req.body.dispensaries) req.body.dispensaries = req.body.dispensaries.split(',');
  if (req.body.dispensaries) req.body.dispensaries = req.body.dispensaries.join(', ');
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
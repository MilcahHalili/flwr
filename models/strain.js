var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var strainSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  categories: {
    type: [String],
    required: true
  },
  moods: {
    type: [String],
    required: true
  },
  imgURL: String,
  dispensaries: [String],

}, {
    timestamps: true
});

strainSchema.post('remove', function(doc) {
  this.model('Dispensary').find(
    {strains: doc._id},
    function(err, dispensaries) {
      dispensaries.forEach(function(bar) {
        dispensary.strains.remove(doc._id);
        dispensary.save();
      });
    }
  );
});

module.exports = mongoose.model('Strain', strainSchema);
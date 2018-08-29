var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var strainSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    category: String,
    mood: String
  },
  dispensaries: String // [{type: Schema.Types.ObjectId, ref: 'Dispensary'}]
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
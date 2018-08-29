var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dispensariesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  strains: [{
    type: Schema.Types.ObjectId,
    ref: 'Strain'
  }]
}, {
  timestamps: true
});

dispensariesSchema.post('remove', function(doc) {
  this.model('Strain').find(
    {dispensaries: doc._id},
    function(err, strains) {
      strains.forEach(function(beer) {
        strain.dispensaries.remove(doc._id);
        strain.save();
      });
    }
  );
});

module.exports = mongoose.model('Bar', dispensariesSchema);
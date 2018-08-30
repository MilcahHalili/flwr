var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var strainSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: String,
  mood: String,
  dispensaries: {
    type: String,
    required: true
  }, // [{type: Schema.Types.ObjectId, ref: 'Dispensary'}]
  liked: {
    type: Boolean,
    default: false
  } // [{type: Schema.Types.ObjectId, ref: 'Dispensary'}]
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
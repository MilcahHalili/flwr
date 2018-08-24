var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  strains: [{
    type: Schema.Types.ObjectId,
    ref: 'Strain'
  }],
  dispensaries: [{
    type: Schema.Types.ObjectId,
    ref: 'Dispensary'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
var mongoose = require('mongoose');

var strainSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    category: String,
    mood: String
  },
  dispensaries: [mongoose.Schema.Types.Dispensaries]
}, {
    timestamps: true
});

module.exports = mongoose.model('Strain', strainSchema);
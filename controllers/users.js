var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function signUp(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      res.json({token: createJWT(user)});
    })
    // Error handler if data invalid i.e. duplicate email
    .catch(err => res.status(400).json(err));
}

function logIn(req, res) {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'Credentials no bueno.'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        res.json({token: createJWT(user)});
      } else {
        return res.status(401).json({err: 'Credentials no bueno.'});
      }
    });
  }).catch(err => res.status(401).json(err));
}

/*--- Helper Functions ---*/
function createJWT(user) {
  return jwt.sign(
    {user}, // Data payload
    SECRET,
    {expiresIn: '48h'}
  );
}

module.exports = {
  signup,
  login
};
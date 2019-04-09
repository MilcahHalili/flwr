var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

function login(req, res) {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'Credentials no bueno.'});
    user.comparePassword(req.body.password, (err, isMatch) => {
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
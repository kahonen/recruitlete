const db = require("../models");
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim().toLowerCase(),
    password: password.trim(),
    role: req.body.role.trim().toLowerCase()
  };

  db.Users.create(userData, (err, user) => {
    if (err) { return done(err); }

    return done(null);
  });
});
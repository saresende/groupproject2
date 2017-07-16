var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var passport = require('passport')
	//, LocalStrategy = require('passport-facebook').Strategy;
/*
var googleStrategy = require('passport-google-oauth');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '520273713084-3nf5h5gnn1dqmljom2n2p0onrjlhkh27.apps.googleusercontent.com',
    clientSecret: 'z6AWkyBFCEWoNslLvFCiRSnE',
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/signin' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
*/

var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;



passport.use(new FacebookStrategy({
    clientID: '2469561986517847',
    clientSecret: 'fcd468a8d9d3bc21320d564dc4c765df',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      if (err) 
        return done(err);
      if (user) {
        return done(null, user)
      } else {
        req.session.user = user;
        localStorage.setItem('accessToken', )
      }
      
    });
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/signin' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

 module.exports = passport;
var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')

var app = express()


//app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
/*
app.use(function (req, res, next) {
  var views = req.session.views

  if (!views) {
    views = req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  views[pathname] = (views[pathname] || 0) + 1

  next()
})

app.get('/', function (req, res, next) {
  var sess = req.session
  if (sess.views) {
    sess.views++
    res.setHeader('ClimateNow!!', 'text/html')
    res.write('')
  }
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
  console.log('got it');
})

app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
  console.log('gottttt it');
})*/

module.exports = session;
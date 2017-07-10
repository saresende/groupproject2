// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");

//var htmlRoutes = require('./routing/htmlRoutes');
//var apiRoutes = require('./routing/apiRoutes');
//
// The default file path to the application
var defaultPath = path.join(__dirname, '/');

// Sets up the Express App
// =============================================================
var app = express();

// Include methods to configure routes
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

// Heroku will set the port via an environment variable
app.set('port', (process.env.PORT || 5000));

// Serve static content for the app from the "public" directory
app.use(express.static(defaultPath + "public"));

// Set the view engine to express-handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configure middleware to support JSON and URL encoded bodies
app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Configure Routes
// =============================================================
//htmlRoutes.setup(defaultPath, app, data);
//apiRoutes.setup(defaultPath, app, data);

// Finally, configure a catch all for baloney http requests
app.all('*', function(req, res, next) {
    // Send a permanent redirect response
    res.redirect(301, 'https://http.cat/404');
    next();
});

// Listen for http requests
// =============================================================
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

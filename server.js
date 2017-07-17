
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");
var models = require("./models/model.js");

// Initialize the data models
models.initializeModels();

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
app.set('port', (process.env.PORT || 3000));

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

app.get("/", function(request, response) {
    var fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
    response.send("Received request for URL: " + fullUrl);
});

// This a temporary path to a test chart
app.get("/chart", function(request, response) {
    var fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;

    // Test getting data from the databse
    models.MeanSeaLevelChange.findAndCountAll().then(result => {

        console.log("Count of returned rows: " + result.count);

        var data = [];

        result.rows.forEach( function(row) {
            data.push([row.year, row.change]);
        });

        //console.log(data);

        response.render("climateChangeChart", { climateData : data });
    });

});

// Finally, configure a catch all for baloney http requests
app.all('*', function(request, response, next) {
    response.redirect("/");
    next();
});

// Listen for http requests
// =============================================================
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));

});

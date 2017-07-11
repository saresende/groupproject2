
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
 var fs = require('fs');

var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// DATA
var reservations = [];
var waitList = [];
app.use(express.static(path.join(__dirname, 'app/public')));


require("./app/routing/htmlRoutes")(app);

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/app/public/home.html"));
});


app.get("")

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

//Require the npm packages. We can probably just require the corresponding JS sheet with the proper info later, but for now, just make sure you can test this sheet independent of the teammates' contributions.
var express = require("express");
var bodyParser = require("body-parser");
var handlebar = require("express-handlebars");
var views = require("../views/layouts/main.handlebars");
var app = express();

//Prepare handlebars for render.
app.engine("handlebars", handlebar({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Create url paths and retrieve the corresponding info from the server.
app.get("/", function(req, res){
	res.render();
	res.___;
});
app.get("/organize", function(req, res){
	res.___;
});
app.get("/climate", function(req, res){
	res.___;
});
app.get("/", function(req, res){
	res.___;
});
app.get("/", function(req, res){
	res.___;
});
app.get("/", function(req, res){
	res.___;
});

//Create api paths and retrieve the corresponding info from the server.

app.get("/api/" function(req, res){
	res.___;
});
app.get("/api/organize" function(req, res){
	res.___;
});
app.get("/api/climate" function(req, res){
	res.___;
});
app.get("/api/" function(req, res){
	res.___;
});
app.get("/api/" function(req, res){
	res.___;
});
app.get("/api/" function(req, res){
	res.___;
});

//Now get ready to post information to the server.
app.post("/api/" function(req, res){
	res.___;
});


//Here, keep the methodOverride command as written in server.js in mind. We need POST having "?_method=DELETE"
app.post("/api/organize" function(req, res){
	res.send();
});
app.post("/api/climate" function(req, res){
	res.___;
});
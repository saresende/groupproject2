var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var cat = require("../config/connectionZub.js");

var app = express();
var port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




//========================================
app.get("/", function(req, res) {
    res.render("home");

});
//========================================
app.post("/signin", function(req, res) {
    //res.render("project-research", { dataHtml: data });
   // res.render("project-Signin");
     res.render("project-Signin");
  });
//========================================
app.post("/signinDone", function(req, res) {
    //res.render("project-research", { dataHtml: data });
    res.render("project-test");
  });
//========================================
app.post("/zubaer", function(req, res) {
    //res.render("project-research", { dataHtml: data });
    res.render("project-test");
  });
//========================================
app.post("/signup", function(req, res) {
  //  res.render("project-Signup", { dataHtml: data });
  res.render("project-Signup");
  });

//========================================
app.post("/signupDone", function(req, res) {
    connection.query("INSERT INTO climate (organizer, Media, description, date, location) VALUE (?????)" , [req.body.name1,req.body.name2,req.body.name3,req.body.name4,req.body.name5], function(err, data) {
    if (err) {
      throw err;
    }
      }); 
  //  res.render("project-Signup", { dataHtml: data });
  res.render("project-Signin");
  });


//========================================
/*
app.post("/detailsPlayers", function(req, res) {
  connection.query("SELECT Name, Nationality, Club, Age, Aggression, Reactions, Speed, Height, Weight FROM fifagame.fulldata WHERE Name='Cristiano Ronaldo';", function(err, data) {
    if (err) {
      throw err;
    }

    console.log('data', data);
    res.render("playresNameDetails", { playernames1: data });

  });
}); 
*/
//========================================
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});


var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();
var port = 4000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

//if(process.env.NODE_ENV==='production'){
  var connectionObject = {
  host: 'us-cdbr-iron-east-03.cleardb.net',
  user: 'b968fc970b80f1',
  password: 'f93d4656',
  database: 'heroku_a38f73473a003db'
  }
//}else{
 //var connectionObject= {
//  host: "localhost",
//  user: "root",
//  password: "dhaka3049",
//  database: "climateChange" }
//}

var connection = mysql.createConnection(connectionObject);

connection.connect(function(err) {
  if (err) {
    return;
  }
  console.log("connected as id " + connection.threadId);
});

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
app.post("/zubaer", function(req, res) {
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
app.post("/signup2", function(req, res) {
  //  res.render("project-Signup", { dataHtml: data });
  res.render("project-Signup2");
  });
//========================================
app.post("/event", function(req, res) {
    connection.query("INSERT INTO heroku_a38f73473a003db.events (organizer, Media, description, date, location, auth_token) VALUE (??????)" , [req.body.name1,req.body.name2,req.body.name3,req.body.name4,req.body.name5,req.body.name6], function(err, data) {
    if (err) {
      throw err;
    }
     console.log('data', data);
      }); 
  //res.render("project-test", { dataHtml: data });
  res.render("project-test");
  });


//========================================
//========================================
app.post("/allPlayers", function(req, res) {
  connection.query("SELECT * FROM climate LIMIT 20;", function(err, data) {
    if (err) {
      throw err;
    }
    console.log('data', data);
    res.render("project-test", { list: data });

  });
});
//=================================================================

app.post("/location", function(req, res) {
  connection.query("SELECT Id, ﻿ShortName, Image1, Image2 FROM heroku_a38f73473a003db.country_locations WHERE ﻿ShortName Like ? LIMIT 5", ['United States'], function(err, data) {

//[req.body.name1]
    if (err) {
      throw err;
    }
    res.render("dataTemp", { dist: data });
    console.log('data', data);
 //   data = [];
 //   forEach data
    print (data); //display json file in localhost
  });
});
  //=================================================================

app.post("/barCarbon", function(req, res) {
  connection.query("SELECT Country, `Carbon Footprint` FROM heroku_a38f73473a003db.carbonlevel WHERE Country IN ('Australia' ,'Austria' ,'Afghanistan', 'Argentina');", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("graphBarcarbon", { avgCarbon: data });
    console.log('data', data);

  });
});

    //=================================================================

app.post("/LineTempRaise", function(req, res) {
  
  console.log("YOU MADE IT BUDDY!!!");

  connection.query("SELECT Country, `Forest Footprint`, `Fishing Water`, `Urban Land` FROM heroku_a38f73473a003db.carbonlevel WHERE Country IN ('Australia' ,'Austria' ,'Afghanistan', 'Argentina');", function(err, data) {
    if (err) {
      throw err;
    }
    // Print object as JSON to the console with some minimal formatting
    //console.log(JSON.stringify(data, null, 4));
    //res.end();
    res.render("graphLineAveTempRaise", { tempRaise: data });
  //  console.log('data', data);
    //print (data); //display json file in localhost
  });
});

    //=================================================================

app.post("/pieChart", function(req, res) {
  connection.query("SELECT Country, `Carbon Footprint` FROM heroku_a38f73473a003db.carbonlevel WHERE Country IN ('Australia' ,'Austria' ,'Afghanistan', 'Argentina');", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("graphPiecarbon", { piecarbon: data });
  //  console.log('data', data);
});
});

//=================================================================

app.post("/sealevel", function(req, res) {
  connection.query("SELECT year, change_msl_mm FROM heroku_a38f73473a003db.mean_sea_level_change_global WHERE year IN ('1992.9595','1999.9094', '2004.1173','2008.4067', '2016.4697');", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("graphSealevel", { sea: data });
  //  console.log('data', data);
});
});
    //=================================================================

app.post("/D3Chart", function(req, res) {
  connection.query("SELECT year, change_msl_mm FROM heroku_a38f73473a003db.mean_sea_level_change_global WHERE year IN ('1992.9595','1999.9094', '2004.1173','2008.4067', '2016.4697');", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("graphD3", { d3: data });
  //  console.log('data', data);
});
});
//========================================
app.listen(port, function() {
  console.log("Listening on PORT " + port);
console.log("Database: " + connectionObject.database);
});


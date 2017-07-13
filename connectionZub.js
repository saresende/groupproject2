var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();
var port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

if(process.env.NODE_ENV==='production'){
  var connectionObject = {
  host: "bmsyhziszmhf61g1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "rqcelfx8fix8aph7",
  password: " vd1f2cmd3ldtan53",
  database: "c6wd0m21tutvglig" }
}else{
 var connectionObject= {
  host: "localhost",
  user: "root",
  password: "dhaka3049",
  database: "climateChange" }
}

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
    connection.query("INSERT INTO climate (organizer, Media, description, date, location) VALUE (?????)" , [req.body.name1,req.body.name2,req.body.name3,req.body.name4,req.body.name5], function(err, data) {
    if (err) {
      throw err;
    }
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
//========================================
//==========================================

app.post("/delete", function(req, res) {
  connection.query("DELETE FROM climate WHERE Name=? " , [req.body.name], function(err, data) {
    if (err) {
      throw err;
    }
      });   
  connection.query("SELECT * FROM climate ORDER BY id DESC;", function(err, data) {
    if (err) {
      throw err;
    }
    console.log('data', data);
    res.render("delete", { list: data });

  });
});
//=================================================================
//=================================================================

app.post("/update", function(req, res) {
  connection.query("UPDATE climate SET Name= ? WHERE Name= ?", [req.body.name1, req.body.name2], function(err, data) {
    if (err) {
      throw err;
    }
      });   
  connection.query("SELECT * FROM climate ;", function(err, data) {
    if (err) {
      throw err;
    }
    console.log('data', data);
    res.render("update", { list: data });

  });
});
//========================================
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});


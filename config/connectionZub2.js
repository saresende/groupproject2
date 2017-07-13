
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
  password: "",
  database: "climateChange" }
}

var connection = mysql.createConnection(connectionObject);

connection.connect(function(err) {
  if (err) {
    return;
  }
  console.log("connected as id " + connection.threadId);
});



// Export connection for our ORM to use.
module.exports = connection;
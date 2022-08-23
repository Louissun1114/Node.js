var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Swy20001114@"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
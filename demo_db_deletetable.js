var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Swy20001114@",
  database: 'mydb'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DROP TABLE IF EXISTS customers";
  con.query(sql,function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log("Successfully deleted!");
  });
});
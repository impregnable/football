var express = require("express");
var mysql = require("mysql");
var app = express();

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "football"
});
console.log("Connected to DB");

app.get("/players", function(req, res) {
  conn.query("SELECT * FROM players", function(err, rows, fields) {
    res.json(rows);
  })
});

app.get("/players/:player_id", function(req, res) {
  conn.query("SELECT * FROM players WHERE player_id = ?", [req.params["player_id"]], function(err, rows, fields) {
    if(rows.length == 1) {
      res.json(rows[0]);
    }
    else {
      res.writeHead(404);
      res.end();
    }
  })
})

var port = 9000;
app.listen(port);
console.log("Server listening on port " + port);

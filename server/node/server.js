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

app.use('/', express.static('../client'));

app.get("/players", function(req, res) {
  conn.query("SELECT * FROM players", function(err, rows, fields) {
    res.json(rows);
  })
});

app.get("/players/:player_id", function(req, res) {
  conn.query("SELECT * FROM players WHERE player_id = ?", [req.params["player_id"]], function(err, player_rows, fields) {
    conn.query("SELECT * FROM players_images WHERE player_id = ?", [req.params["player_id"]], function(err, images_rows, fields) {
      var result, images;
      if(player_rows.length == 1) {
        result = player_rows[0];
        images = images_rows.map(function (row) { return row["image_filename"] });
        result.images = images;
        res.json(result);
      }
      else {
        res.writeHead(404);
        res.end();
      }
    });
  })
})


var port = 9000;
app.listen(port);
console.log("Server listening on port " + port);

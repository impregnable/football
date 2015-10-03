var express = require("express");
var app = express();

app.get("/players", function(req, res) {
  res.send("Players");
});

app.get("/players/:player_id", function(req, res) {
  res.send("Player #" + req.params.player_id);
})

app.listen(9000);

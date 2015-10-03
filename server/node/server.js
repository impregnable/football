var http = require("http");

var server = http.createServer(function(req, res) {
  res.write("Hello");
  res.end();
})

server.listen(9000);

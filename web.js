var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");
var htmlFile = fs.readFileSync("index.html");
var buf = new Buffer(htmlFile, "utf-8");
app.get('/', function(request, response) {
  response.send(buf.toString()); 
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

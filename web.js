var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!2');
  // read from the index.html file here
  //var buffer = new Buffer(16);
  //var str = fs.readFile('index.html');
  //buffer.write(str, "utf-8");
  //response.send('whats up!');
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

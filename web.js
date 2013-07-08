var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!2');
  // read from the index.html file here
  var str = new Buffer(fs.readFile('index.html'));
  console.log(str);
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

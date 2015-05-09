var http = require('http');
var fs = require('fs');
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

fs.readFile('test.txt', function (err, logData) {
  
  if (err) throw err;
  
  var text = logData.toString();
  
var results = {};

  var lines = text.split('\n');
  
lines.forEach(function(line) {
    var parts = line.split(' ');
    var letter = parts[1];
    var count = parseInt(parts[2]);
    
if(!results[letter]) {
      results[letter] = 0;
    }
    
results[letter] += parseInt(count);
  });
  
console.log(results);
});

var server = http.createServer(function (req, res) {
    console.log('msg');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hi');
    res.end('Hello World\n');
});

server.listen(3000);
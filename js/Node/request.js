var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('Running on port ' + port);
});

//var http = require('http'),
//    express = require('express');
//
//var app = express();
//
//app.use(express.static(__dirname + '/public'));
//
//var server = http.createServer(function (req, res) {
//    console.log('msg');
//    res.writeHead(200, {
//        'Content-Type': 'text/plain'
//    });
//    res.write('hi');
//    res.end('Hello World\n');
//});
//
//server.listen(3000);
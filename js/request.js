var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write('hello, this is dog.');
    setTimeout(function () {
        response.write('done');
        response.end();
    }, 5000);
    response.end();
}).listen(8080);

console.log('hello world');
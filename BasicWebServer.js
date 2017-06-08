var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    host = '127.0.0.1',
    port = '9000';

var mimes = {
    ".htm": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png"
}

var serve = http.createServer(function(req, res) {
    var filePath = (req.url === '/') ? ('./src/index.html') : ('.' + req.url);
    var contentType = mimes[path.extname(filePath)];
    fs.exists(filePath, function(file_exists) {
        if (file_exists) {
            fs.readFile(filePath, function(error, content) {
                if (error) {
                    res.writeHead(500);
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf-8');
                }
            })
        } else {
            res.writeHead(404);
            res.end('file not found');
        }
    })
}).listen(port, host, function() {
    console.log('server running on: ' + host + ':' + port);
});
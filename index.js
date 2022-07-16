var http = require('http');
var url = require('url');
var fs = require('fs');

var http = require('http');
http.createServer(function (req, res) {
    let urls = ["./index.html","./about.html","./contact-me.html"]
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if(!urls.includes(filename)){
        filename = "./404.html";
    }
    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}).listen(8080);
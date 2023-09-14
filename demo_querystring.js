var http = require('http');
var url = require('url');
http.createServer(function(req, res){
    res.writeHead(280, {'Content-Type':'text/html'});
    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month;
    res.end(text);
}).listen(8080);
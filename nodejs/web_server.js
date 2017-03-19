const http = require('http');
const urlLib = require('url');
const querystring = require('querystring');
var server = http.createServer(function(req, res) {
    //get数据请求
    var url_obj = urlLib.parse(req.url, true);
    var pathname = url_obj.pathname;
    var GET = url_obj.query;

    //post数据请求
    var reciveData = '';
    req.on('data', function(data) {
        reciveData += data;
    });
    req.on('end', function() {
        var POST = querystring.parse(reciveData);
        console.log(GET, POST);
        res.end();
    });
});
server.listen(8080, 'localhost');
console.log("8080 has run");

var http=require('http');
console.log("this is server has started!");
var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<meta charset='utf-8'/>");
    res.end("hello world!");
});
server.listen(8000);
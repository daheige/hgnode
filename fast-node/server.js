var http = require("http");
http.createServer( function (req, resp){
	resp.writeHead(200,{"Content-Type":"text/plain"});
	resp.end("hello,world\n");
}).listen(3000);

console.log("server running at :3000");


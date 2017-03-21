const http = require("http"); //http模块我们不会去改变，就定义为常量
//创建一个 HTTP 通道代理
var server = http.createServer(function(req,res) { //接受两个参数： req表示请求参数，res处理请求的结果
    console.log('i am heige');
    // console.log(req) //req请求的所有参数
    console.log(req.url); // /fefefe
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("fefefefe"); //向客户端发送信息
    res.end("ok");
});

//监听客户端 端口1337
server.listen(1337, 'localhost');
console.log('1337 has run');

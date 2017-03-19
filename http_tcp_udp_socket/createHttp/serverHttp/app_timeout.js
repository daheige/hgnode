/**
*  author:zhuwei313@hotmail.com
*  time:2014-12-04
*  httpServer
 */
//在nodejs中，提供了http模块和https模块，用于创建HTTP服务器，HTTPS服务器，客户端等，实现了这些服务器之中所需进行的处理。
var http=require("http");
var server=http.createServer(function(req,res){
    //res.writeHead(200,{"Content-Type":"text/html"});
    //res.write("<meta charset='utf-8'/>");
    //console.log("请求的地址"+req.url);
    //res.end("我是大黑哥！");
    res.end();
}).listen("1337",'127.0.0.1',function(){
    //监听回调函数
    console.log("服务器开始监听");
});

//server.listen(port,host,backblog,callback);
//backblog表示用于指定等待队列中的客户端连接的最大数量，超过这个数量HTTP就开始拒绝新的客户端连接，默认是511，如果超过限制，就会回调函数处理，返回给客户端相应的信息。

//当客户但和服务器HTTP建立连接就会触发connection事件
server.on("connection",function(socket){
    console.log("服务器和客户端建立了连接");
});

//监听错误信息
server.on("error",function(e){
    if(e.code == "EADDRINUSE"){
        console.log("服务器地址或者端口被占用");
    }
});

//设置超时
//server.timeout=10*1000 单位毫秒比如1分=1000ms
//server.on("timeout",function(socket){});

server.setTimeout(10*1000,function(socket){
    console.log("服务器连接超时");
    console.log(socket);
    
});






/**
*  auth:zhuwei313@hotmail.com
*  time:2014-12-6
*  发送服务器端响应流
 */
var http=require("http");
var server=http.createServer(function(req,res){
    //发送响应头到客户端
    console.log("开始监听客户端请求");
    if(req.url !== "/favicon.icon"){
    //res.writeHead(200,{"Content-Type":"text/html","Access-Control-Allow-Orgin":"http://localhost"});
        //跨域访问需要在HTTP响应头信息中添加这个
        res.writeHead(200,{"Content-Type":"text/plain"});
         res.write("<meta charset='utf-8'/>");
         res.write("获取数据成功：你好");
    }
    //请求响应结束
    //console.log("客户端请求结束");
    
    res.end("fefefe");
}).listen(1337,'localhost');

//监听错误信息
server.on("error",function(e){
    if(e.code == "EADDRINUSE"){
        console.log("服务器地址或者端口被占用");
    }
});


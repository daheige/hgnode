/**
*  auth:zhuwei313@hotmail.com
*  time:2014-12-6
*  发送服务器端响应流
 */
var http=require("http"),fs=require('fs');
var server=http.createServer(function(req,res){
    //当客户端关闭时触发
    res.on("close",function(){
            console.log("连接中断");
    });
    //设置超时
    res.setTimeout(2000);
    //监听超时
    res.on("timeout",function(){
        console.log("连接超时");
    });
    //5秒后触发
    setTimeout(function(){
        res.setHeader("Content-Type","text/html");
        //getHeader(name)得到响应头某个字段
        //判断响应头是否发送出去res.headersSent
        res.write("<meta charset='utf-8'/>");
        res.write("daheige");
        res.end();
    },5000);
}).listen(8080,'localhost');

//监听错误信息
server.on("error",function(e){
    if(e.code == "EADDRINUSE"){
        console.log("服务器地址或者端口被占用");
    }
});


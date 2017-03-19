/**
*创建tcp服务器
* time:2014-12-1
* author:zhuwei313@hotmail.com
* git:@daheige
*/
var net=require("net");
var server=net.createServer(function(socket){
    //close all connections
    server.close(function(){
        console.log("服务器拒绝访问，被关闭");
    });
    
});

//监听8431端口，ip：localhost,回调函数func
server.listen(8431,'localhost',function(){
    console.log("服务器开始监听");
});

//如果端口和IP被占用就显示EADDRINUSE
server.on("error",function(e){
    if(e.code == "EADDRINUSE"){
        console.log("该端口和地址被占用");
    }
});
//打开一个命令窗口输入node createTcpServer.js
//在另一个命令窗口中，输入telnet localhost 8431



/**
*创建tcp服务器
* time:2014-12-1
* author:zhuwei313@hotmail.com
* git:@daheige
*/
var net=require("net");
var server=net.createServer(function(socket){
    //net.createServer({allowHalfOpen:true},function(socket));
    //参数是可选的，allowHalfOpen为false当Tcp服务器接收到客户端发出的一个FIN包，就会回一个FIN包,true不回包
    //Tcp服务器监听的参数是socket
    console.log("服务器和客户端连接已经建立");
    //getConnections(callback)获取客户端连接的数量
    
    server.getConnections(function(err,count){
        console.log("当前存在%d个客户端连接",count);
        server.maxConnections=3;//最大服务器连接数量
        console.log('TCP服务器最大连接数量%d',server.maxConnections);
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



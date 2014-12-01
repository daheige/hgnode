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
    
});

//监听8431端口，ip：localhost,回调函数func
server.listen(8431,'localhost',function(){
    console.log("服务器开始监听");
    var address=server.address();
    //返回一个对象，包含port表示TCP服务器监听的socket端口号8431,address属性值为TCP服务器监听地址，比如127.0.0.1,family属性值为一个标识了TCP服务器所监听的地址是IPV4,还是IPv6地址的字符串
    console.log("被监听的地址信息%j",address);
});

//如果端口和IP被占用就显示EADDRINUSE
server.on("error",function(e){
    if(e.code == "EADDRINUSE"){
        console.log("该端口和地址被占用");
    }
});
//打开一个命令窗口输入node createTcpServer.js
//在另一个命令窗口中，输入telnet localhost 8431



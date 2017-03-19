/**
*创建tcp服务器
* socket端口对象
* time:2014-12-1
* author:zhuwei313@hotmail.com
* git:@daheige
*/
var net=require("net");
var server=net.createServer();
//监听connection
server.on("connection",function(socket){
    //socket端口对象socket.address()代表一个socket端口对象
    var address=socket.address();
    console.log("socket端口对象信息%j",address);
    console.log(address.address);
    //result
    /*
        socket端口对象信息{"address":"127.0.0.1","family":"IPv4","port":8431}
        127.0.0.1
    */
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



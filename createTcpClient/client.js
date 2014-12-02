/**
*create tcp client.js
*/
var net=require("net");
var client=new net.socket();//create a connection server socket
//net.socket(options)
/*
fd用于指定一个现存的socket文件的描述符,tcp client将用这个现存的socket端口和服务器端口连接
type：指定客户端连接使用协议tcp4,tcp6,unix
allowHalfOpen:false回包FIN,true当服务器接收到客户端发送的FIN，不回FIN包

使用socket端口对象的connect两种方法连接TCP服务器
1 socket.connect(port,host,callback)
2 socket.on("connect",function(){
    //回调函数
});
socket.connect(path,callback);//指定路径，适合unix端口服务进行连接
*/

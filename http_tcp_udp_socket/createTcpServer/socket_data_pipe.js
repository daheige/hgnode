/**
*创建tcp服务器
* socket端口对象
* time:2014-12-1
* author:zhuwei313@hotmail.com
* git:@daheige
*/
var net=require("net");
var file=require("fs").createWriteStream("./mess.txt");
var server=net.createServer();
//监听connection
server.on("connection",function(socket){
    //对socket监听data，对客户端发送信息做处理
    socket.on("data",function(data){
        //data是缓存区中数据是一个buf需要转化
        console.log(data.toString());
        console.log("已经接收到客户端%d字节数据",socket.bytesRead);
        
    });
    //将客户端发送的流写入文件中
    socket.pipe(file);
    //客户端关闭
    socket.on("end",function(e){
        console.log("客户端连接被关闭");
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




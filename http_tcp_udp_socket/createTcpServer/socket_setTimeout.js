/**
*创建tcp服务器
* socket端口对象
* time:2014-12-1
* author:zhuwei313@hotmail.com
* git:@daheige
*/
//指定客户端超时
var net=require("net");
var file=require("fs").createWriteStream("./mess_pause_resume_timeout.txt");
var server=net.createServer();
//监听connection
server.on("connection",function(socket){
    //设置10s超时
    socket.setTimeout(100*1000);//0表示取消超时
    socket.pause();//中止
    //监听超时处理
    socket.on("timeout",function(){
        socket.resume();//恢复监听
        socket.pipe(file);
    });
    socket.on("data",function(data){
        socket.pause();
    });
    socket.on("end",function(){
        //客户端连接关闭
        console.log("客户端连接关闭");
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




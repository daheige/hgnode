/**
*创建tcp服务器
* socket端口对象
* time:2014-12-1
* author:zhuwei313@hotmail.com
* git:@daheige
*/
var net=require("net");
var file=require("fs").createWriteStream("./mess_pause_resume.txt");
var server=net.createServer();
//监听connection
server.on("connection",function(socket){
    socket.pause();//终止data事件触发
    //3秒后恢复
    setTimeout(function(){
        //恢复socket的data事件的触发
        socket.resume();
        socket.pipe(file,{end:false});
    },3000);
    socket.on("end",function(){
        //客户端连接关闭
        file.end("客户端关闭时间"+new Date());
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




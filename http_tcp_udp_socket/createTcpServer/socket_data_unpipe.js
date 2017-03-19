/**
*创建tcp服务器
* socket端口对象
* time:2014-12-1
* author:zhuwei313@hotmail.com
* git:@daheige
*/
var net=require("net");
var file=require("fs").createWriteStream("./mess_unpipe.txt");
var server=net.createServer();
//监听connection
server.on("connection",function(socket){
    socket.pipe(file,{end:false});//写入文件中，允许再写入
    setTimeout(function(){
        file.end("再见");
        //终止写入
        socket.unpipe(file);
        console.log("3秒后停止写入");
    },3000);//3秒后向mess_unpipe中写入“再见"    
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




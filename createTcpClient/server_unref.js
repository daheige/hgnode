/**
 *  创建TCP服务器
 *  author:zhuwei313@hotmail.com
 */
var net=require("net");
var server=net.createServer();
//监听连接
server.on('connection',function(socket){
    console.log("服务器和客户端建立连接");
    //设置编码
    socket.setEncoding("utf8");
    //监听客户端发送的数据
    socket.on('data',function(data){
        console.log("已接收客户端发送的数据："+data);
        //socket端口对象可以用来写入向客户端或服务端发送的流数据
        //当流数据
        socket.write("确认数据："+data);
        //可以用socket.write(data)发送小的文件
    });
    //监听客户端关闭
    socket.on("end",function(){
        console.log('客户端连接被关闭');
        //当所有的客户端关闭，可以用unref()退出
        server.unref();
        //可以ref()继续阻止应用程序退出
    });
    //当socket彻底关闭后，触发socket端口对象的close事件
    socket.on("close",function(err){
        if(err) 
        {
            console.log('由于一个错误导致socket端口被关闭');
            server.unref();
        }
        else
            console.log('端口正常关闭');
    });
});

server.listen(8431,"localhost");
//监听8431
//捕捉错误err后销毁该socket端口对象
server.on("error",function(err){
    console.log("与客户端连接或通信遇到错误，错误代码是："+err.code);
    server.destroy();
});

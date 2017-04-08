const http = require("http");
let server = http.createServer(function(req, res) {

}).listen(3000, 'localhost'); //监听3000端口
server.on('listening', function() {
    console.log('服务器开始监听');
});
server.timeout = 1000;
server.on('close', function() {
    console.log('服务器被关闭');
});

//error,request等事件可以被监听

server.on('error',function(err){
    if(err.code == 'EADDRINUSE') console.log('端口被占有'); //如果我们同时开启两个node程序，就会提示端口被占用
});
//开始连接监听
server.on('connection',function(socket){
    // console.log(socket);
    console.log('开始连接');
});
server.on('timeout',function(socket){
    //默认2分钟连接超时
    console.log(1);
    server.close();
});
//或者用server.setTimeout(1000,function(socket){});

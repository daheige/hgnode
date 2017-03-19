/**
 *  server.js
 */
var http=require("http");
var server=http.createServer(function(req,res){
    if("/favicon.ico" !== req.url){
        //请求监听data事件
        req.on("data",function(data){
            console.log("服务器端接收到数据："+data);
            //向客户端发送响应
            res.write("确认数据："+data);
           
        });
        //请求结束触发end
        req.on("end",function(){
            res.addTrailers({'Content-MD5':'4fefefe'});
            //在服务器响应之前在尾部加上一个头信息
            res.end();//响应结束
        });
    }
}).listen(1337,"localhost");
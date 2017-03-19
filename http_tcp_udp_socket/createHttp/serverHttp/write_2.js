/**
*  auth:zhuwei313@hotmail.com
*  time:2014-12-6
*  发送服务器端响应流
 */
var http=require("http"),fs=require('fs');
var server=http.createServer(function(req,res){
    //发送响应头到客户端
    console.log("开始监听客户端请求");
    if(req.url !== "/favicon.icon"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<meta charset='utf-8'/>");
         //读取一个文件
         fs.readFile("./my.txt","utf8",function(err,data){
            if(err) console.log("读取文件发生错误");
            else{
                res.write("读取到的数据是："+data);
                //显示在页面
                //如果文件比较大的时候，就要设置超时
                
                console.log("读取的数据是："+data);
                
                //响应结束
                res.end();
               
            }
         });     
    }
}).listen(1337,'localhost');

//监听错误信息
server.on("error",function(e){
    if(e.code == "EADDRINUSE"){
        console.log("服务器地址或者端口被占用");
    }
});


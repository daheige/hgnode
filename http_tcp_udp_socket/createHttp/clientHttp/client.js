/**
 *  client.js
 */
var http=require("http");
var options={
    hostname:'localhost',
    port:1337,
    path:'/',
    method:'POST'
}
var req=http.request(options,function(res){
    //接收到服务器的返回信息
    res.on('data',function(chuck){
        console.log("客户端收到服务器数据："+chuck);
    });
    res.on("end",function(){
        console.log("Trailer头信息：%j",res.trailers);
    });
});
req.write("你好");//向服务器端发送数据
req.end("请求结束");
req.on("error",function(err){
    if('ECONNREFUSED' === err.code){
        console.log("服务器未启动");
    }else{
        console.log("请求服务器出错，错误代码："+err.code);
    }
    
});
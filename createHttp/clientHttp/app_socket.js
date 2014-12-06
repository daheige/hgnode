/**
 *  HTTP客户端
 *  在http模块中，可以用request方法向其他的网站请求数据
 */
//建立客户端请求百度首页
var http=require("http");
var options={
    'hostname':'www.baidu.com',
    'port':80,
    'path':'/',
    'method':'GET'
}
//创建客户端
var req=http.request(options,function(res){
    //res表示请求返回的结果
    console.log("状态码："+res.statusCode);
    console.log("响应头："+JSON.stringify(res.headers));
    //转化为字符串
    //设置编码
    res.setEncoding("utf8");
    //监听data事件
    res.on('data',function(chuck){
        console.log("返回的数据："+chuck);
    });
});

//请求过程中发生错误
req.on("error",function(err){
    //在socket请求超时，错误代码是ECONNRESET
    if(err.code === "ECONNRESET"){
        console.log("socket端口超时");
    }else{
        console.log("请求中发生错误，错误代码:"+err.code);
    }
    
});

//在建立连接时候，会为连接分配端口，触发socket事件
req.on("socket",function(socket){
    socket.setTimeout(1000);//设置socket超时
    //监听socket超时
    socket.on("timeout",function(){
        req.abort();//socket超时中止本次请求
    });
});

req.end();//结束请求

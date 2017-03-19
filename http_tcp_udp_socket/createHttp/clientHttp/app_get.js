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
//创建客户端http.request,或者用http.get
var req=http.get(options,function(res){
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

//setTimeout设置请求超时
req.setTimeout(1000,function(){
    req.abort();
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

req.end();//结束请求

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
    console.log("错误代码:"+err.code);
});
req.end();//结束请求

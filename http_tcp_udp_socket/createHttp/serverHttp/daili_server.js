/**
 *  代理服务器的实现
 *  author: zhuwei313@hotmail.com
 */
var http=require("http");
var url=require("url");
var server=http.createServer(function(sreq,sres){
    //1 接收客户端的请求
    var url_p=url.parse(sreq.url);//将url字符串转化为对象
    var opts={
        host:'www.z.cn',
        port:80,
        path:url_p.pathname,
        headers:url_p.headers
    }
    
    //2 请求目标网站www.z.cn
    var creq=http.get(opts,function(cres){
        sres.writeHead(cres.statusCode,cres.headers);
        //发送服务器响应头信息给客户端
        cres.pipe(sres);//通过管道复制目标网站的数据给sres
    });
    creq.on("error",function(err){
        console("请求服务器失败，错误代码："+err.code);
    });
    
    //3 将数据发送给客户端
    sreq.pipe(creq);
});
server.listen(1337,"localhost");

//监听错误信息
server.on("error",function(e){
    if(e.code == "EADDRINUSE"){
        console.log("服务器地址或者端口被占用");
    }else{
        consoe.log("错误代码："+e.code);
    }
});


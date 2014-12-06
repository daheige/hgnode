/**
*  auth:zhuwei313@hotmail.com
*  time:2014-12-6
*  使用parse解析url地址字符串
 */
var http=require("http"),url=require('url');
var server=http.createServer();
//监听
server.on("request",function(req,res){
    if(req.url !== "/favicon.icon"){
        console.log("开始访问网站");
        res.write("<meta charset='utf-8'/>");
        var url_p=url.parse(req.url);//解析url为一个obj
        //判断路径
        switch(url_p.pathname){
            case "/":
            case "/index.html":
                res.write("你在访问本网站");
                break;
            default:
                res.write("你访问的页面是："+url_p.pathname);
                
        }
        //访问的路径
        console.log("访问URL的路径："+url_p.pathname);
    }
    console.log("访问结束");
    res.end();//结束请求
});
server.listen(1337,"localhost");
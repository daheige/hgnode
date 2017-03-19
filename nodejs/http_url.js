const http = require("http");
const urlLib = require("url");
var server = http.createServer(function(req, res) {
    // console.log(req);
    //获取get提交的参数
    console.log(req.url) ///do_form?username=fee&userpwd=333&age=23
    var GET = {}; //存放接收的数据
    var url_obj = urlLib.parse(req.url, true); //第二个参数会对参数解析解码
    var path = url_obj.pathname;
    if (path != '/favicon.ico') {
        //注意：querystring.parse() 方法返回的对象不继承自 JavaScript 的 Object。
        //这意味着典型的 Object 方法如 obj.toString()、obj.hasOwnProperty() 等没有被定义且无法使用。
        GET = url_obj.query;
        console.log(GET); //{ username: 'fee', userpwd: '333', age: '朱伟' }
    }

    res.end("ok");
});
server.listen(8080, "localhost");
console.log("8080 has run");

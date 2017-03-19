const http = require("http");
var server = http.createServer(function(req, res) {
    // console.log(req);
    //获取get提交的参数
    console.log(req.url) ///do_form?username=fee&userpwd=333&age=23
    var GET = {}; //存放接收的数据
    var arr = req.url.split("?");
    if (arr[0] != '/favicon.ico') {
        var par = arr[1].split("&");
        for (var i = 0; i < par.length; i++) {
            var arr2 = par[i].split("=");
            GET[arr2[0]] = encodeURIComponent(arr2[1]);
        }
        console.log(GET);
    }
    res.end("ok");
});
server.listen(8080, "localhost");
console.log("8080 has run");
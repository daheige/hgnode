/**
 * [http querystring用法]
 * @type {[type]}
 * querystring.stringify({name:"daheige",age:1,sex:1}); //将对象的参数解析成url拼接部分
 * 'name=daheige&age=1&sex=1'
 *  querystring.parse('username=fee&userpwd=333&age=23'); //将查询的参数进行解析，形成key/val形式
 *  { username: 'fee', userpwd: '333', age: '23' }
 */
const http = require("http");
const queryString = require("querystring");
var server = http.createServer(function(req, res) {
    // console.log(req);
    //获取get提交的参数
    console.log(req.url) ///do_form?username=fee&userpwd=333&age=23
    var GET = null; //存放接收的数据
    var arr = req.url.split("?");
    if (arr[0] != '/favicon.ico') {
        //注意：querystring.parse() 方法返回的对象不继承自 JavaScript 的 Object。
        //这意味着典型的 Object 方法如 obj.toString()、obj.hasOwnProperty() 等没有被定义且无法使用。
        GET = queryString.parse(arr[1]);
        console.log(GET);
    }

    res.end("ok");
});
server.listen(8080, "localhost");
console.log("8080 has run");

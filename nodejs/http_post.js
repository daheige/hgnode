const http = require('http');
const querystring = require('querystring');//解析参数模块
http.createServer(function(req, res) {
    //接受post数据，因为post是分段发送，需要把内容分段接收,数据量比较大的情况下，分段接收
    var reciveData = '';
    var i = 0;
    req.on('data', function(data) {
        console.log('第' + (i++) + '段数据');
        /*
        第0段数据
        第1段数据
         */
        reciveData += data;
    });
    //接收完毕事件监听
    req.on('end', function() {
        // console.log('接收完毕'+reciveData); //接收完毕 username=fefefe&userpwd=&age=23
        var POST = querystring.parse(reciveData); //解析主体data数据
        console.log(POST);
        res.end('ok');
    });
}).listen(8080, 'localhost');
console.log('8080 has run');

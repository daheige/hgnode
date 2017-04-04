const http = require("http");
const fs   = require('fs');
let server = http.createServer(function(req, res) {
    if(req.url != '/favicon.ico'){
        console.log(req.headers); //请求头信息
        var outFile = fs.createWriteStream('req_info.log',{'flag':'w','encoding':'utf8'});
        outFile.write('客户端请求方法是'+req.method+'\n');
        outFile.write('请求地址是'+req.url+'\n');
        outFile.write('客户端请求头对象'+JSON.stringify(req.headers)+'\n'); //可以从请求头中获取信息
        outFile.write('http版本'+req.httpVersion);
    }
    res.end('请求成功');
}).listen(3000, 'localhost'); //监听3000端口
console.log('开始请求');
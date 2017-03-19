const http = require('http')
var server = http.createServer();
//监听客户端请求request事件
server.on('request', function(req, res) {
    res.write('hello world');
    res.end('请求成功')
});
//on可以对同一个事件绑定多个事件处理程序
server.on('request', function(req, res) {
    if (req.url != '/favicon.ico') console.log(req.url);
});
var testFunc = function(req, res) {
    console.log('请求的地址是' + req.url)
}
server.on('request', testFunc);
server.removeListener('request', testFunc); //去掉事件testFunc
server.removeAllListeners('request');
server.on('request', function(req, res) {
    console.log('hello');
    res.end('ok');
})
server.listen(3000, 'localhost'); //指定端口3000运行 localhost:3000
console.log('3000 has run');
console.log(server.listeners('request')); //获得request处理程序
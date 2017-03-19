const http = require("http");
const fs = require("fs");

var server = http.createServer(function(req, res) {
    var file_name = "./www" + req.url;
    //异步读取文件
    //nodejs中没有容器的概念，文件读取是异步进行，请求的地址是req.url
    fs.readFile(file_name, function(err, data) {
        if (err) {
            res.write("file not found");
        } else {
            res.write(data) //buffer二进制内容
        }
        res.end();
    });
});
server.listen(1337, "localhost");
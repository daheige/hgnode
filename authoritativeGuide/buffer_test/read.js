const fs = require('fs');
fs.readFile(__dirname + '/test.txt', function(err, buf) {
    if (err) console.log(err);
    console.log(buf.toString()); //buffer对象转化为字符串
});

//base64转化
let buf = new Buffer('daheige');
console.log(buf.toString('base64')); //ZGFoZWlnZQ==

//图片资源转化，形成data uri
let mime = 'image/png';
let encoding = "base64";
//同步读取文件
let data = fs.readFileSync(__dirname + '/github.png').toString('base64'); //读取文件返回一个buf对象，然后转为base64编码
let uri = 'data:' + mime + ';' + encoding + ',' + data;
console.log(uri); //把uri的值复制到浏览器地址栏访问就是一个图片
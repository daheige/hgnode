const fs = require('fs');
//图片base64转化
let buf = new Buffer('daheige');
console.log(buf.toString('base64')); //ZGFoZWlnZQ==

//图片资源转化，形成data uri
let mime = 'image/png';
let encoding = "base64";

//同步读取文件
// let data = fs.readFileSync(__dirname+'/github.png').toString('base64'); //读取文件返回一个buf对象，然后转为base64编码
// let uri = 'data:'+mime+';'+encoding+','+data;
// console.log(uri); //把uri的值复制到浏览器地址栏访问就是一个图片

//通过读取流的方式来读取图片
let read_file = fs.createReadStream(__dirname + '/github.png', {
    encoding: 'base64'
}); //base64位的方式读取图片
read_file.on('open', function(fd) {
    console.log("-------------文件读取开始-------");
});

read_file.on('data', function(data) {
    console.log("读取的数据是:\n" + data);
    let uri = 'data:' + mime + ';' + encoding + ',' + data;
    console.log(uri); //把uri的值复制到浏览器地址栏访问就是一个图片
});

read_file.on('end', function() {
    console.log("--------------全部读取-----------");
});
const fs = require('fs');
//指定为utf-8编码
fs.readFile("test.txt", "utf-8", function(err, data) {
    if (err) console.log("读取失败")
    console.log(data);
    //没有指定编码读取的是这样的方式读取的是buf
    //<Buffer 66 65 66 65 66 65 66 65 0a 73 73 73 73 0a 31 32 33 34 35 36 0a 39 39 39
    // 39 39 30 0a 66 65 66 65 6a 6a 6a 6a 6a>
    console.log(data.toString()) //转换为字符串
});
// 写入文件内容
var content = "fefefe";
fs.writeFile("hg.txt", content, {
    'encoding': 'utf-8',
    'flag': "w" //写入的模式
}, function(err) {
    if (err) console.log("写入失败");
    console.log('ok');
});


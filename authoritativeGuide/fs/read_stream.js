const fs = require('fs');
var file = fs.createReadStream(__dirname+'/a.txt',{start:0});
file.on('open',function(fd){
    console.log("-------------文件读取开始-------");
});

file.on('data',function(data){
    console.log("读取的数据是:\n"+data);
});

file.on('end',function(){
    console.log("--------------全部读取-----------");
});

file.on('close',function(){
    console.log("-----------文件被关闭-----");
});
file.on('error',function(err){
    console.log("文件读取失败");
});
/**
 * -------------文件读取开始-------
读取的数据是:
hello ,i am heige.
我正在学习nodejs
--------------全部读取-----------
-----------文件被关闭-----
 */


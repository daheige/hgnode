//从一个文件读取流中将数据写入到另一个流中，写入文件
//读取a.txt文件中的内容，写入到b.txt中
const fs = require('fs');
var file = fs.createReadStream(__dirname+'/a.txt',{flag:'r',encoding:'utf8'});
var outFile = fs.createWriteStream(__dirname+'/b.txt',{flag:'a+'});
file.on('data',function(data){ //读取到的内容
    outFile.write(data,'utf8'); //写入流中
});
outFile.on('open',function(fd){
    console.log("写入的文件已打开")
});
outFile.on('drain',function(){
    console.log("操作系统的缓存区内容已全部写入");
});
outFile.on('error',function(err){
    console.log("写入错误");
})
file.on('end',function(){
    //文件读取结束，监听写入是否完成
    outFile.end('写入完毕',function(){
        console.log("文件写入结束");
        console.log("一共写入的字节数"+outFile.bytesWritten);
    });
});


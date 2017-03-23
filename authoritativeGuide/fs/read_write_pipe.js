const fs = require('fs');
var readStream = fs.createReadStream(__dirname+"/a.txt",{encodng:'utf8'}); //这里的路径必须是一个完整的路径
var out = fs.createWriteStream(__dirname+'/read_write_stream.txt',{flag:'a+',encodng:'utf8'});
out.on('error',function(err){
    console.log("写入错误")
})
readStream.pipe(out,{'end':false}); //通过管道方式写入是一个异步的过程，当end为false还可以继续写入文件
// setTimeout(function(){
//     readStream.unpipe(out); //取消文件写入
// },10);
out.write("daheige123");


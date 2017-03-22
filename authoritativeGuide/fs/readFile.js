const fs = require('fs');
//异步读取一个文件
// fs.readFile(filename,obj,callback) filename表示文件名，obj.flag对文件采用什么样的操作(r,r+,w,w+,a,w+)
// w+表示读取并写入（如果文件存在，读取清空文件后，再写入），a追加内容到文件中

fs.readFile(__dirname+'/a.txt',{flag:'r',encoding:'utf8'},function(err,data){
    //第二个对象参数可以省略
    if(err) throw err;
    console.log(data.toString()); //将缓存区的buffer对象转换为字符串
});


const fs = require('fs');
fs.open(__dirname + '/a.txt', 'r', function(err, fd) { //fd表示文件扫描的描述符是一个整数，文件句柄
    if (err) throw err;
    console.log(fd);
    //打开了文件，接着读取文件内容
    // fs.read(fd,buffer,offset,length,position,callback)
    // fs.write(fd,buffer,offset,length,position,callback) 写入文件内容
    // buffer是一个对象，将文件存放在哪个缓存区，offset表示开始读取内容到缓存区写入的位置，length表示读取的字节数
    // position读取文件的开始位置，callback表示回调函数
    var buf = new Buffer(255);
    fs.read(fd,buf,0,36,0,function(err,byteRead,buffer){
        //byteRead实际读取的字节数，被读取的缓存区对象
        console.log(buffer.slice(0,byteRead).toString());
    });
    fs.close(fd)
});

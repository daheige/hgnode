const fs = require('fs');
fs.stat(__dirname,function(err,stats){
    if(err) throw err;
    console.log(stats)
});
/*{ dev: 1016010631, 设备id
  mode: 16822, 权限标志
  nlink: 1, 硬链接数量
  uid: 0, 用户id
  gid: 0, 组id
  rdev: 0, 字符设备或者块设备所在设备id
  blksize: undefined,
  ino: 2814749767166368,
  size: 0, //文件尺寸
  blocks: undefined,
  atime: 2017-03-22T15:25:08.632Z, //访问时间
  mtime: 2017-03-22T15:25:08.632Z, //最后修改时间
  ctime: 2017-03-22T15:25:08.632Z, //创建时间
  birthtime: 2017-03-22T15:22:37.615Z }*/
  //对于打开的文件fs.fstat()查看文件信息

//检查目录或文件是否存在
fs.exists(__dirname+'/a.txt',function(flag){
    console.log(__dirname);
    if(flag) console.log("文件存在");
    else
        console.log("文件不存在");
});

//获取文件的绝对路径
fs.realpath('./a.txt',function(err,path){
    console.log(path)
});

// fs.utimes(path,atime,mtime,callback) //修改文件访问时间和修改时间

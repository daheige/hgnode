const fs = require('fs');
fs.mkdir(__dirname+"/test",'0755',function(err){
    if(err) throw err;
    console.log('目录创建成功');
});
fs.readdir(__dirname,function(err,files){
    if(err) throw err;
    console.log(files);
});
/**
 * 执行结果
 * 目录创建成功
[ 'a.txt',
  'dir_test.js',
  'fs_open.js',
  'readFile.js',
  'test',
  'writeFile.js',
  '同步和异步的区别.txt',
  '对文件的读写.txt',
  '目录创建和读取.txt' ]
 */
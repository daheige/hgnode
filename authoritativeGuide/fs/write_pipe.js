const fs = require('fs');
var out = fs.createWriteStream(__dirname+'/test_write_pipe.txt',{flag:'w'});
out.on('error',function(err){
    console.log("写入错误");
});
out.write('写入一些内容');
out.end();
// out.write('heige'); //当写入结束后，无法再写入内容，会报错
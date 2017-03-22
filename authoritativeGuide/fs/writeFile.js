const fs = require('fs');
//将内容写入文件中
//fs.writeFile(filename,opt_obj,callback)
//opt_obj = {flag:'w',mode:0644,encoding:'utf8'} mode表示权限4个数字组成，第一个数字必须是0
//后面的数字表示文件拥有者，所属组，其他人的权限

fs.writeFile(__dirname + '/hg.txt',{flag:'w',mode:0644,encoding:'utf8'},function(err){
    //__dirname当前目录名，后面不带反斜杠/
    if(err) console.log('写入文件失败');
    console.log('ok');
});

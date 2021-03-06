//nodejs中提供了path路径处理模块
const pathLib = require('path');
//将//转换成一个\
console.log(pathLib.normalize('.//a//b//c'));//a\b\c 可以解析..和.转换为标准格式路径

//路径拼接
console.log(pathLib.join(__dirname,'a','b/c','d'));
// pathLib.resolve(path1,path2,..) 以应用程序目录为起点，根据所有的参数值字符串及诶出一个绝对路径

console.log(pathLib.dirname('/d/projects/heige')) //获取一个路径中的目录名

let base_info = pathLib.basename('/d/projects/heige.txt');
console.log(base_info) //不加参数得到文件名和后缀
console.log(pathLib.basename('/d/a.txt','.txt')) //得到文件名

//获取拓展名
console.log(pathLib.extname('/d/a.go')); //.go

//获取系统文件分割符号
console.log(pathLib.sep)

// 获取指定路径分隔符
console.log(pathLib.delimiter); //;
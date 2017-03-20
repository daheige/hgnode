let name = "daheige";
let say = function(){
    console.log('foo module');
}
//将变量和函数导出
exports.name = name;
exports.say = say;
//常用的控制台方法
console.log("daheige"); //标准输出
console.log('%s', 'fefefe', 'heige'); //格式化输出 %s表示字符串，%d表示数字
// fefefe heige
console.error('error'); //标准错误输出

var UserObj = {};
UserObj.name = 'daheige';
UserObj.say = function() {
        console.log('hello world');
    }
    //查看对象上的方法或者对象的信息输出到控制台
console.dir(UserObj);
/**
 * run result
 * daheige
fefefe heige
error
{ name: 'daheige', say: [Function] }
 */

//统计代码执行时间
//标签名 flag 可以使任意字符串
var flag = "test";
console.time(flag);
var str = '';
for(var i = 0;i<1000;i++){
    str += i;
}
console.log(str);
console.timeEnd(flag); //test: 0.363ms
console.trace(); //查看当前位置的栈信息作为标注错误信息输出，追踪代码的执行

console.assert(1==22,'raise an exception'); //对表达式判断，如果是false就抛出异常
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
const util = require('util');
console.log(util.format('%j',{foo:1})); //格式化字符串
//支持格式有: %d 整数及浮点数，%s字符串，%j指定一个json对象，%%表示百分号
console.log(util.isArray([]));
console.log(util.isRegExp(/s/));//判断是否是正则表达式
//util.isDate() 判断是否一个日期
//util.inherits(func,superobj) //继承
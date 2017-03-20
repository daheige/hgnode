let foo = require(__dirname+'/foo.js');
let Bar = require(__dirname+'/Bar.js');
let hgfoo = require('hgfoo');
console.log(foo.name);
foo.say();
let person = new Bar('heige',26);
console.log(person.getName());
person.setName('wuxin');
person.getName();
person.say();

console.log('hgfoo 模块的name '+hgfoo.name);
console.log(module.id) //当前模块的id
console.log(module.filename) //会打印当前test.js的完整路径
console.log(module.loaded) //判断当前模块是否加载完毕
console.log(module.parent) //当前模块的父模块对象 null


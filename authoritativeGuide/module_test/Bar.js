function Bar(name = 'daheige',age = 27){
    this.name = name;
    this.age = age;
}
Bar.prototype.getName = function (){
    return this.name;
}
Bar.prototype.setName = function(name){
    this.name = name;
}
Bar.prototype.say = function(){
    console.log('i am '+this.name+' age '+this.age);
}
module.exports = Bar; //将类导出

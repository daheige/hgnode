```
var fs = require("fs");

function getFileInfo(filename) {
    return new Promise(function(resolve, reject) {
        fs.stat(filename, function(err, result) {
            if (err) return reject({
                code: 500,
                message: '获取失败',
                data: null
            });
            return resolve({
                code: 200,
                message: 'ok',
                data: result
            });
        });
    });
}
// var file = getFileInfo('app.js');
// console.log(file); //promise
//方式1：使用迭代器方式获取结果
// function* gen(filename){
//     var fileInfo = yield getFileInfo(filename);
//     return fileInfo;
// }

// var g = gen('ap.js');
// g.next().value.then(function(res){
//     console.log(res);
// },function(err){
//     console.log(err);
// });

//方式2：通过promise的方式获取结果
// getFileInfo('app.js').then(function(result){
//     console.log(result);
// },function(err){
//     console.log(err);
// });


//方式3：采用co方式把异步流程变成同步
//
function readFile(filename) {
    return new Promise(function(resolve, reject) {
        var readStream = fs.createReadStream(filename, { start: 0 });
        readStream.on('data', function(data) {
            // console.log('读取到数据：');
            return resolve(data);
        });
        readStream.on('error', function(err) {
            // console.log('读取文件失败');
            return reject(false);
        });

    });
}

// thunk函数
// 在co的应用中，为了能像写同步代码那样书写异步代码
// 比较多的使用方式是使用thunk函数（但不是唯一方式，还可以是：Promise）
// 比如读取文件内容的一步函数fs.readFile()方法，转化为thunk函数的方式如下
function readFileCb(path, encoding = 'utf8'){
    return function(cb){
        fs.readFile(path, encoding, cb);
    };
}
// thunk函数具备以下两个要素：
// 有且只有一个参数是callback的函数；
// callback的第一个参数是error。
// 使用thunk函数，同时结合co我们就可以像写同步代码那样来写书写异步代码

var co = require('co');
// co(function*() {
//     var fileInfo = yield getFileInfo('app.js');
//     var oneInfo = yield getFileInfo('one.php');
//     var data = yield readFile("one.php");
//     console.log(fileInfo.data.mtime);
//     console.log(data.toString());

//     var res = yield readFileCb('one.php');
//     console.log(res);
// });

//co+thunk用法
//我们可以用thunkify
//var thunkify = require('thunkify'); //可以包装第一个参数是err的异步函数
//var readFile = thunkify(fs.readFile);
co(function* (){// 外面不可见，但在co内部其实已经转化成了promise.then().then()..链式调用的形式
    var a = yield readFileCb('app.js', {encoding: 'utf8'});
    // console.log(a);
    var b = yield readFileCb('one.php', {encoding: 'utf8'});
    // console.log(b);
    return yield Promise.resolve(a+b);
}).then(function(val){
    console.log(val);
}).catch(function(error){
    console.log(error);
    console.log("读取信息失败");
});
```

```
//promise,co以及yield用法
var fs = require('fs');
var co = require('co'); //需要安装co模块,es6的promise+Generator特性替代回调函数
var exts = ['.js'];
var path = require('path');
//在Promise上有两个静态方法resolve,reject，还有then,catch等
//resolve意味着成功解决，而reject意味着拒绝

function sayhello() {
    // return Promise.resolve('hello').then(function(hello) {
    //     console.log(hello);
    //     return 2222;
    // });
    //创建promise对象
    return new Promise(function(resolve, reject) {
        fs.readdir('./ss', function(err, files) {
            if (err) {
                return reject('当前目录不存在');
                // return reject(err);
            }

            return resolve(files.filter(v => exts.includes(path.parse(v).ext)));
            // resolve(1) //返回值放在resolve中
        });
    });
}

function* test() {
    var a = yield sayhello(); //yield后面的异步函数，当程序运行到这里会暂停，记录下当前的状态，从而继续执行
    console.log(a, 1)
}

//方式１ co传递一个迭代生成器
co(test).catch(function(err) { //用于捕捉错误
    console.log(err);
    console.log(1);
});





// 方式二 在nodejs中有两个事件,可以监听到未捕捉的报错信息 那就是unhandledRejection和uncaughtException
// co(test);
// process.on('unhandledRejection', function (err) {
//     console.error(err);
// });

// process.on(`uncaughtException`, console.error);

/**--------------读取文件------------------**/
// function readFile(filename){
//     return function(cb){
//         fs.readFile(filename,'utf-8',cb);
//     }
// }

// // co(function *(){
// //     var data = yield readFile('./my.log');
// //     console.log(data);
// //     return 'done';
// // });

// co(function* () {
//     // var data = yield readFile('./my.log');
//     var data2 = yield readFile('./my.log');
//     // console.log(data,data2);
//     console.log(data2);
//     return 'done';
// }).then(function(res){
//     console.log(res);
// },function(err){
//     console.log(err);
// });

/*------------------------------------------------------关于promise------------------------------------------------*/
/*
Promise本身是一个对象在nodejs 4.x开始支持。创建一个Promise对象很简单，主要是分两步

var promise = new Promise((resolve,reject)=>{
    var data = [1,2,3]
    if(data.length > 3)
         resolve(data)
    else
        reject(new Error("array length invalid"))
})
这就是一个非常基础的东西，resolve意味着成功解决，而reject意味着拒绝。但是如何继续进行以后的事情，对事情的结果如何处理呢？这就是涉及到了Promise.then 这个东西意味着然后。Promise.then(resolveHandler,rejectHandler)存在两个回调函数根据个人的需求进行处理。

  promise.then(res => {
    console.log(res)
}, err => {
    console.error(err)
})
这两个的顺序是固定的，即使你处理的东西不需要res，你也必须用这样的形式来正确表达

promise.then(null, err => {
    console.error(err)
})
来让promise理解你不需要resolve的handler
大家可以根据代码看看我们获得的东西究竟是什么，理解下res，err到底是什么，再看看接下来的东西

其实res就是当Promise的状态为resolve下所返回的数据，而err则是Promise的状态为reject情况下所返回的异常。用官方来讲的话就是promise.then(onFulfilled, onRejected)。但是说实话我们在用then的时候我们对于onRejected是非常少的，因为它存在一些问题，导致我们都是用Promise.catch()来捕获在前阶段中出现的异常的。

接下来就是Promise.catch()的一些简单用法

Promise.catch(err)主要存在一个回调正如我们看到的它的函数体获得了一个err参数，也可以向前面这么理解把就是Promise.catch(errorHandler)就是错误处理函数。以下是它的用法

promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

//----------------------------------------------关于catch异常捕捉--------------------------
在catch前面的所有异常都会被他捕获，我们可以把他想象成一个很大的try catch 块来对异常进行处理
所以和我们在rejectHandler中能处理能做的，我们的catch都更胜一筹！所以我们大致都是用catch来处理整个Promise中可能产生的异常

//----------------------------------------------关于Promise.resolve,Promise.reject---------
Promise.resolve("resolve").then(res=>{
    console.log(res)
})
Promise.reject("error").catch(err=>{
    console.error(err)
})
这边的意思的话，大家可能不难看出我们的Promise.resolve和Promise.reject 类似一个Promise对象的工厂
可以主观地生成一个已经resolve或是reject的Promise对象，从而我们可以在这个对象的基础上进行操作。而且这是一个静态的方法，可以随时随地帮助我们应用Promise，这两个调用的方法挺简单的。

接下来是我们的多重then，catch的使用，我们都知道我们在then和catch中对应的回调函数都是有对应的参数的，
而在一个存在Promise的函数我们所能获得的参数必然是这样的通过resolve或是reject传过来的
Promise.resolve(1)
    .then(res=>{
        return res+1
     })
    .then(res=>{
        console.log(res)
     })
    .catch(err=>{
        console.error(err)
     })
最后我们得到便是2，而且这个then可以非常的长，每当我们完成一个事件的时候，它会接着往下走，直到then的终点，或中间被catch了。同样的，如果我们在errhandler中返回了值，那么你觉得会是怎么样？
Promise.reject(1)
    .then(res=>{
        return res+3
     },err=>{
         return err+1
     })
    .then(res=>{
        console.log(res)
     })
    .catch(err=>{
        console.error(err + 1)
     })
 结果还是2，为什么呢？因为只要你通过return返回一个值的话，你所获得的，都是一个resovle的状态的Promise，要解决这个问题，你就只能抛异常，让catch来捕获了
 把errorhandler 的回调函数改成 throw new Error(err)那么打印出来的将会大有不同！
 而且比较有趣的是我们的catch和then都是可以混搭的，以下情况也是能继续跑的

Promise.resolve(1)
    .then(res=>{
        return res+1
     },err=>{
         return err+1
     })
    .then(res=>{
        console.log(res)
     })
    .catch(err=>{
         return  err+1
     }).then(res=>{
         //因为拿到一个返回值了，所以我们后面的then又能继续进行
         console.log(res)
     })
 */
```

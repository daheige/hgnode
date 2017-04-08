const process = require('process');
const fs = require('fs');
// console.log(process.arch); //系统位数

//通过命令读取文件
let args = {
    '-h': display,
    '-r': readFile
}

function display() {
    console.log('hello', args);
}

function readFile(file) {
    fs.exists(file, function(args) { //判断文件是否存在
        if (args) {
            console.log('读取文件', file);
            console.log('文件内容是：');
            fs.createReadStream(file, {
                encoding: 'utf8'
            }).pipe(process.stdout); //读取文件内容输出到终端
        } else {
            console.log('文件不存在');
            process.exit(1);//退出程序
        }
    });
}
let inputArgvs = process.argv; //所有的参数是一个数组
if (inputArgvs.length > 0) {
    // console.log('输入的参数是' + inputArgvs);
    inputArgvs.forEach(function(arg, index) {
        if (args.hasOwnProperty(arg)) {
            // console.log(arg);
            // console.log(inputArgvs.slice(index+1)[0]); //获取文件名
            // (args[arg]).apply(this,inputArgvs.slice(index+1));
            (args[arg]).call(this, inputArgvs.slice(index + 1)[0]);
        }
    });
}

console.log('进程id: '+process.pid); //由于nodejs的createReadStream读取内容是异步的，该行可能优先执行
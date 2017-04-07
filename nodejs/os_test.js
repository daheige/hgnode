//os和系统信息相关的模块
const os = require('os');
let tmpdir = os.tmpdir(); //临时目录
console.log(tmpdir);

console.log(os.endianness()); //获取cpu字节序 LE,BE

console.log(os.hostname());//获取计算机名称

console.log(os.type()); //操作系统的类型 Windows_NT,Linux

console.log(os.platform()); //操作系统平台 win32
console.log(os.arch()); //x64 操作系统cup架构

console.log(os.release()); //操作系统版本号

console.log(os.uptime()); //获取系统当前运行时间

console.log(os.loadavg()); //系统平均负载 返回一个数组，放了1分钟，5分钟，15分钟的负载情况

console.log(os.totalmem()); //系统总内存量 kb单位

console.log(os.freemem()); //内存空闲内存量

console.log(os.cpus()); //cpu所有信息

console.log(os.networkInterfaces()); //所有网络接口信息
console.log(os.EOL); //换行符

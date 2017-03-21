let buf = new Buffer("daheige你好", 'utf8');
console.log(buf) //<Buffer 64 61 68 65 69 67 65>
console.log(buf.toString()) //将buffer转换为字符串，toString接收3个参数，编码，开始位置，结束位置
console.log(buf.length, 'daheige'.length) //13 7

let arr_buf = new Buffer([1, 3, 4]);
console.log(arr_buf);
console.log(arr_buf.join('').split('')); //转换为字符串数组

let s_buf = new Buffer('我是大黑哥');
s_buf.write("哈", 3, 3); //从第3个buf位置写入3个字节的缓存
console.log(s_buf.toString());

//buff对象和json对象数据相互转化

let hg_buf = new Buffer('i am daheige');
let json = JSON.stringify(hg_buf);
console.log(json) //{"type":"Buffer","data":[105,32,97,109,32,100,97,104,101,105,103,101]}

// 将json字符串转换为对象
let arr_json = JSON.parse(json);
console.log(arr_json)

let copy_buf = new Buffer(JSON.parse(json));
console.log(copy_buf)
console.log(copy_buf.toString()) //还原成字符串

//buffer缓存数据复制
let a_buf = new Buffer('daheige');
let c_buf = new Buffer(128);
//用0来填充c_buf
c_buf.fill(0);

let b = a_buf.copy(c_buf, 10); //从c_buf的第10个位置写入数据a_buf
console.log(b)

//Buffer对象常见的一些方法
//检测一个对象是否是一个buffer对象
console.log(Buffer.isBuffer(a_buf)); //true

//计算指定字符串的字节数
console.log(Buffer.byteLength("daheige你好", "utf8")); //13个字节数，在utf8编码下一个汉字占据3个字节

//连接buffer对象，形成一个新的buffer对象
let n_buf = Buffer.concat([buf, s_buf]).toString();
console.log(n_buf);

console.log(Buffer.isEncoding('utf16le')); //检测一个字符串是否为一个幼小的额编码格式（utf16le,utf8)字符串
console.log(Buffer.isEncoding("utf8ss"));

let fs = require("fs");

// 创建一个读取流
let reader = fs.createReadStream("input.txt");

// 创建一个写入流
let writer = fs.createWriteStream("output2.txt");

reader.pipe(writer);

console.log("pipe end");

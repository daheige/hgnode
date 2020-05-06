// stream pipe 链式调用
let fs = require("fs");
let zlib = require("zlib");

// 压缩input.txt ---> input.txt.gz
fs.createReadStream("input.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("input.txt.gz"));

console.log("gzip end");
// 往文件中写入内容
// 通过写入流操作
let fs = require("fs");
let data = `feffefe
fefefe
fefefe
sss
fes244`
let writerStream = fs.createWriteStream("output.txt");

writerStream.write(data, "UTF8");

writerStream.end();

writerStream.on("finish", function () {
    console.log("write success");
});

writerStream.on("error", function (err) {
    console.log("write file error: ", err.stack);
});

console.log("write end");
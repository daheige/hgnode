let fs = require("fs");
let data = [];
let readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data", function (chuck) {
    data.push(chuck)
});

readerStream.on("end", function () {
    console.log("data: ", data.join(""));
});

readerStream.on("error", function (err) {
    console.log(err.stack)
});

console.log("exec end");

/**
 * % node stream.js
exec end
data:  fefefefe
hello
ssss
daheige
 */
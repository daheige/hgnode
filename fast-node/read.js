let fs = require("fs");
let data = fs.readFileSync("test.txt");
console.log(data.toString());

console.log("read end");


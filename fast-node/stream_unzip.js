let fs = require("fs");
let zlib = require("zlib");
fs.createReadStream("input.txt.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("input2.txt"));

console.log("gunzip end");

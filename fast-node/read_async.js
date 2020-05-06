let fs = require("fs");
let data = fs.readFile("test.txt",function(err,data){
	if (err) return console.log(err);
	console.log(data.toString());
});


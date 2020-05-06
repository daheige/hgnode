let events = require("events");
let eventEmit = new events.EventEmitter();

// connected event
let connectHandler = function(){
	console.log("connection success");
        eventEmit.emit("data_recv");
};

eventEmit.on("connection",connectHandler);

eventEmit.on("data_recv",function(){
	console.log("recv data success");
});

eventEmit.emit("connection");

console.log("exec end");


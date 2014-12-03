/**
 *  server for UDP
 */
var dgram=require('dgram');
//dgram module for create udp client and create udp server
//create udp server's socket obj
var server=dgram.createSocket('udp4');

//watch on 'message' event
server.on('message',function(msg,rinfo){
    console.log('has receive the data of udp client:'+msg);
    console.log('client adress info %j',rinfo);
    var buf=new Buffer('confirm msg:'+msg);
    //create buf obj
    //send msg to client udp
    server.send(buf,0,buf.length,rinfo.port,rinfo.address);
    //port,address(receive udp)
});

//watch on 'listening'
server.on('listening',function(){
    var address=server.address();
    console.log('server is listening...the address info: %j',address);
});
//bind the port and address
server.bind(41234,'localhost');



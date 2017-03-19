/**
 *  create client UDP
 */
var dgram=require('dgram');
//dgram module for create udp client and create udp server
//create udp server's socket obj
var message= new Buffer('hello daheige');
var client=dgram.createSocket('udp4');

//send msg to server udp
//message is buf,it store msg for sending
var port=41234;
client.send(message,0,message.length,port,'localhost',function(err,bytes){
    if(err) console.log('no data send');
    else
        console.log('has send %d bytes data',bytes);
});
//watch server udp send msg
client.on('message',function(msg,rinfo){
    console.log('has receive server msg data: %s',msg);
    console.log('server ip:'+rinfo.address);
    console.log('server port'+rinfo.port);

});


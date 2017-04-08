const net = require('net');
console.log(net.isIP('10.0.0.1')); //ipv4地址返回4，ipv6地址返回6，非ip返回0
console.log(net.isIPv4('10.0.0.2'));

console.log(net.isIPv6('2001:4509:a005::68'));

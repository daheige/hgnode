//在nodejs中OpenSSL类库作为内部实现加密和解密的基础手段。
//被封装在crypto模块中，提供了MD5 SHA-1等算列算法
const crypto = require('crypto');
// console.log(crypto.getHashes()); //所有可用的算列算法

//md5加密
let hash = crypto.createHash('md5');//参数有sha1,md5,sha256,sha512,ripemd160等，指定使用的算列算法
hash.update('123456','utf8');//创建一个摘要，hash.update(data,encoding) data可以使一个Buffer对象或者字符串
// 如果是buffer对象，第二个参数必须指定

let s = hash.digest('hex'); //输出摘要内容，接受编码参数 hex,binary,base64,如果省略参数就是一个buffer对象
// let s = hash.digest(); //<Buffer e1 0a dc 39 49 ba 59 ab be 56 e0 57 f2 0f 88 3e>
console.log(s);
// console.log(hash.digest()) //报错，因为在使用了digest之后，不能再想hash对象中追加内容

//HAMC算法
// let hasc = crypto.createHmac(algorithm, key); algorithm表示使用哪种算法，key表示密钥
// 其他的和hash相同

let hasc = crypto.createHmac('sha1', 'daheige');
hasc.update('1234');
console.log(hasc.digest('hex'));
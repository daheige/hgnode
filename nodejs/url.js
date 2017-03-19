/**
 * [urlLib url模块用法]
 * @type {[type]}
 */
const urlLib = require("url");
//解析地址
var page_link ="http://www.baidu.com?id=1&age=23&name=daheige";
var obj = urlLib.parse(page_link);
// console.log(obj);
/**
 * 运行结果
 * 第二个参数默认是false,URL 对象上的 query 属性会是一个未解析、未解码的字符串
 * {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?id=1&age=23&name=daheige',
  query: 'id=1&age=23&name=daheige',
  pathname: '/',
  path: '/?id=1&age=23&name=daheige',
  href: 'http://www.baidu.com/?id=1&age=23&name=daheige' }
 */
var obj_url = urlLib.parse(page_link,true);
console.log(obj_url);
/**
 * 运行结果
 * {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?id=1&age=23&name=daheige',
  query: { id: '1', age: '23', name: 'daheige' },
  pathname: '/',
  path: '/?id=1&age=23&name=daheige',
  href: 'http://www.baidu.com/?id=1&age=23&name=daheige' }
  query是一个对象，参数可以直接提取出来
 */
/*url的每个部分
┌─────────────────────────────────────────────────────────────────────────────┐
│                                    href                                     │
├──────────┬┬───────────┬─────────────────┬───────────────────────────┬───────┤
│ protocol ││   auth    │      host       │           path            │ hash  │
│          ││           ├──────────┬──────┼──────────┬────────────────┤       │
│          ││           │ hostname │ port │ pathname │     search     │       │
│          ││           │          │      │          ├─┬──────────────┤       │
│          ││           │          │      │          │ │    query     │       │
"  http:   // user:pass @ host.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          ││           │          │      │          │ │              │       │
└──────────┴┴───────────┴──────────┴──────┴──────────┴─┴──────────────┴───────┘
 */

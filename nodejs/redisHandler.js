/**
 * @author:daheige
 * @git:daheige
 * @time:2017-08-10
 * @address:shenzhen,China
 * 使用之前请安装redis2.8.0
 * npm install -g redis
 * 用法
 * var redisHandler = require('./redisHandler');
 * var redisObj = redisHandler(redis_config);
 * redisObj.setVal('username','heige');
 * //redisObj.getVal('username');
 * var redisProxy = redisObj.getProxy();
 * redisProxy.set('strname','heige'); //其实就是this.client
 * 常见用法
 *  this.client.set("string key", "string val", function (err, reply){});
 *  this.client.hset("hash key", "hashtest 1", "some value", redis.print);
 *  this.client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
    this.client.hkeys("hash key", function (err, replies) {
        console.log(replies.length + " replies:");
        replies.forEach(function (reply, i) {
            console.log("    " + i + ": " + reply);
        });
        client.quit();
    });
 * 其他用法
 *
 *  this.client.hmset(["key", "test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) {});
 *  Works the same as
    this.client.hmset("key", ["test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) {});
    Or
    this.client.hmset("key", "test keys 1", "test val 1", "test keys 2", "test val 2", function (err, res) {});
   集合操作
   var args = [ 'myzset', 1, 'one', 2, 'two', 3, 'three', 99, 'ninety-nine' ];
    this.client.zadd(args, function (err, response) {
    if (err) throw err;
    console.log('added '+response+' items.');

    // -Infinity and +Infinity also work
    var args1 = [ 'myzset', '+inf', '-inf' ];
    this.client.zrevrangebyscore(args1, function (err, response) {
        if (err) throw err;
        console.log('example1', response);
        // write your code here
    });

    var max = 3, min = 1, offset = 1, count = 2;
    var args2 = [ 'myzset', max, min, 'WITHSCORES', 'LIMIT', offset, count ];
    this.client.zrevrangebyscore(args2, function (err, response) {
        if (err) throw err;
        console.log('example2', response);
        // write your code here
    });
});
 */
'use strict';
class redisHandler { //采用单例模式进行redis连接
    constructor(redis_config) {
        if (typeof redisHandler.instance != 'undefined') {
            return redisHandler.instance;
        }

        if(typeof redis_config == 'undefined'){
            redis_config = {
                port : '6379',
                host : '127.0.0.1',
                options : {}
            };
        }
        this.port = redis_config.port;
        this.host = redis_config.host;
        this.options = redis_config.options;
        let redis = require('redis');
        this.client = redis.createClient(this.port, this.host, this.options);
        this.printFn = function() {};
        this.client.on('connect', function() {
            console.log('ok');
        });
        this.client.on('error', function(err) {
            console.log("Error " + err);
        });
        redisHandler.instance = this;
    }

    static getInstance(redis_config) {
        if (typeof redisHandler.instance != 'undefined') {
            return redisHandler.instance;
        }

        return new redisHandler(redis_config);
    }

    /**
     * 设置Redis自动转换为json，防止缓存击穿
     */
    setBylock(key, value, expire = 0) {
        expire = parseInt(expire) > 0 ? parseInt(expire) : 600;
        let r_exp = expire + 100;
        let c_exp = Math.floor((new Date()).getTime() / 1000) + expire;
        let arg = JSON.stringify({ data: value, expire: c_exp });
        this.client.set(key,arg);
        this.client.del(key + '.lock');
    }
    //获取redis的值，自动格式化为对象
    // getBylock(key) {
    //     let sth = this.client.get(key);
    //     return sth;
    //     if (sth === false || sth == null) {
    //         return {};
    //     } else {
    //         sth = JSON.parse(sth);
    //         if (typeof sth.expire == 'undefined' || Math.floor(sth.expire) <= (new Date()).getTime() / 1000) {
    //             let lock = this.client.incr(key + '.lock',this.printFn);
    //             if (lock == 1) {
    //                 return {};
    //             }
    //             return typeof sth.data != 'undefined' ? sth.data : sth;
    //         } else {
    //             return sth.data;
    //         }
    //     }

    // }

    setEx(key, val, time = 300,fn) {
        this.client.set(key, val, 'EX', time);
        if(typeof fn == 'function') fn();
    }

    setVal(key,val,fn){
        this.client.set(key, val, fn || this.printFn);
    }

    // getVal(key,fn){
    //     this.client.get(key, function (err, value){
    //         if (err) return false;
    //         if(typeof fn == 'function') fn();
    //         return value ? value : false;
    //     })
    // }

    getProxy(){ //提供redis操作的句柄client，可以直接调用redis的命名执行操作
        return this.client;
    }
}

module.exports = redisHandler.getInstance;

const http = require('http');
/**
 * [get nodejs实现简单get请求]
 * @param  {[type]}   url      [请求地址]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
function get(url, callback) {
    if (typeof url === 'undefined') return false;
    url = require('url').parse(url);
    let query = url.query,
        path = url.pathname;
    if (query) path += query; //查询字符串
    let options = {
        hostname: url.hostname,
        port: url.port || 80,
        path: path,
        method: 'GET',
    };

    // 创建请求
    let req = http.request(options, function(res) {
        const statusCode = res.statusCode; //状态码
        let rawData = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            rawData += chunk;
        });
        res.on('end', function() {
            // console.log(rawData);
            if (typeof callback === 'function') callback(rawData, statusCode);
        });
    });

    //监听请求错误
    req.on('error', function(e) {
        console.log('请求遇到问题:' + e.message);
    });
    req.end(); //请求结束
}

/**
 * [getJson get json方式]
 * @param  {[type]}   url      [请求地址]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
function getJson(url, callback) {
    let req = http.get(url, function(res) { //http.get()方式请求会自动调用req.end()
        const statusCode = res.statusCode; //状态码
        let error;
        if (statusCode !== 200) {
            error = '请求失败。\n' + '状态码:' + statusCode;
        }

        if (error) {
            console.log(error);
            res.resume(); // 消耗响应数据以释放内存
            return false;
        }
        res.setEncoding('utf8'); //设置编码
        let rawData = '';
        res.on('data', function(chunk) {
            rawData += chunk;
        });
        res.on('end', function() {
            try {
                let parsedData = JSON.parse(rawData);
                console.log(parsedData);
                if (typeof callback === 'function') callback(rawData, statusCode);
            } catch (e) {
                console.log(e.message);
            }
        });
    });
    req.on('error', function(e) {
        console.log('错误:' + e.message);
    });
}
/**
 * [post post请求]
 * @param  {[type]}   url      [请求url]
 * @param  {[type]}   data     [请求主体数组]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
function post(url, data, callback) {
    if (typeof url === 'undefined') return false;
    url = require('url').parse(url);
    let query = url.query,
        path = url.pathname;
    if (query) path += query;
    let type; //请求头类型
    if (data == null) data = '';
    if (data instanceof Buffer) { //二进制数据
        type = 'application/octet-stream';
    } else if (typeof data === 'string') {
        type = 'application/plain;charset=utf-8';
    } else if (typeof data === 'object') { //key/val
        data = require('querystring').stringify(data);
        type = 'application/x-www-form-urlencoded';
    }
    // 请求参数
    let options = {
        hostname: url.hostname,
        port: url.port || 80,
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': type,
            'Content-Length': Buffer.byteLength(data)
        }
    };
    //创建请求
    let req = http.request(options, function(res) {
        const statusCode = res.statusCode; //状态码
        let rawData = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            rawData += chunk;
        });
        res.on('end', function() {
            // console.log(rawData);
            if (typeof callback === 'function') callback(rawData, statusCode);
        });
    });

    req.on('error', function(e) { //监听错误信息
        console.log('请求遇到问题:' + e.message);
    });

    req.write(data); // 写入数据到请求主体
    req.end(); //结束请求
}
//导出模块
exports.get     = get;
exports.post    = post;
exports.getJson = getJson;
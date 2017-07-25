//mysql 连接池操作类
const mysql = require("mysql");
class Hgmysql {
    constructor(config) {
        //类的初始化必须用new操作符
        if (typeof new.target == 'undefined') {
            throw Error("please use New to init this class!");
            return;
        }
        // 判断是否存在实例
        if (typeof Hgmysql.instance === 'object') {
            return Hgmysql.instance;
        }
        this.flag = true;
        this.pool = this.createPool(config);
        Hgmysql.instance = this;
    }

    createPool(config) {
        return mysql.createPool({
            host: config.host || 'localhost',
            user: config.user || 'root',
            password: config.password || '',
            database: config.database || 'test',
            port: config.port || '3306'
        });
    }
    //获取连接，供外部调用
    getPool() {
        if (this.flag) {
            this.pool.on('connection', function(connection) {
                connection.query('set names utf8');
                this.flag = false;
            });
        }
        return this.pool;
    }

    query(sql, bindParams = [], fn) {
        this.checkSql(sql);
        this.pool.getConnection(function(err, conn) {
            if (err) {
                console.log(err);
                return;
            } else {
                conn.query(sql, bindParams, function(qerr, vals, fields) {
                    //释放连接  
                    conn.release();
                    //事件驱动回调  
                    typeof fn == 'function' && fn(qerr, vals, fields);
                });
            }
        });
    }

    checkSql(sql) {
        if (typeof sql == 'undefined') throw Error('sql is empty');
    }

    delete(sql, bindParams = [], fn) {
        this.execSql(sql,bindParams,fn);
    }

    update(sql, bindParams = [], fn) {
        this.execSql(sql,bindParams,fn);
    }

    execSql(sql, bindParams = [], fn) {
        this.checkSql(sql);
        this.pool.getConnection(function(err, conn) {
            conn.query(sql, bindParams, function(err, rs) {
                if (err) {
                    console.log(err);
                    return;
                }
                conn.release();
                typeof fn == 'function' && fn(rs);
            });
        });
    }

    insert(sql, bindParams = [], fn) {
        this.execSql(sql,bindParams,fn);
    }
}

exports.Hgmysql = Hgmysql;
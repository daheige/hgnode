const mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test',
    port: '3306'
});
conn.connect();
conn.query('select 1+1 as cnt', function(err, rows, fields) {
    if (err) throw err;
    console.log(rows[0].cnt); //2
});
conn.end();

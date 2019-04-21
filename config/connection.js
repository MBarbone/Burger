// require mysql
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: '',
    database: 'burgers_db'
});

connection.connect(function(err){
    if(err) throw err
});

module.exports = connection;
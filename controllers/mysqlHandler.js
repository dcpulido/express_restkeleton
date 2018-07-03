var mysql      = require('../node_modules/mysql');
var fs         = require('fs');
var CONFIG     = JSON.parse(fs.readFileSync(__dirname + "/../config/config.json", 'utf8'));
var connection = mysql.createConnection({
    host     : CONFIG.mysql.host,
    user     : CONFIG.mysql.user,
    password : CONFIG.mysql.password,
    database : CONFIG.mysql.database,
    port     : CONFIG.mysql.port,
    socket   :  '/var/run/mysqld/mysqld.sock' 
});

module.exports.q = function(queryString, callback) {
    try {
        connection.query(queryString, function(err, rows, fields) {
            if (err) {
                console.log("err");
                console.log(queryString);
                console.log("ERROR : " + err);
            }
            callback(rows);
            return rows;
        });
    }
    catch(ex) {
        console.log(queryString);
        console.log("EXCEPTION : " + ex);
    }
};
module.exports.qWithArgs = function(queryString,args, callback) {
    try {
        connection.query(queryString,args, function(err, rows, fields) {
            if (err) {
                console.log("err");
                console.log(queryString);
                console.log("ERROR : " + err);
            }
            callback(rows);
            return rows;
        });
    }
    catch(ex) {
        console.log(queryString);
        console.log("EXCEPTION : " + ex);
    }
};
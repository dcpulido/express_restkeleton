const bodyParser = require('body-parser');
var mysqlHandler = require("../controllers/mysqlHandler")

var allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

module.exports = function(app, passport) {
    app.use(allowCrossDomain);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json()); 
    app.get('/hello', function(req, res) {
        res.send('hello world'); 
    });
}   

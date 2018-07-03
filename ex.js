//@author dcpulido91@gmail.com

var express = require('express');
var passport = require('passport');
var morgan =require('morgan');
const bodyParser = require('body-parser');
var flash = require('connect-flash');
var fs = require('fs');

var app = express();
var path = require('path');
var CONFIG = JSON.parse(fs.readFileSync(__dirname + "/config/config.json", 'utf8'));

app.use(morgan('dev')); 
app.use(flash()); 
app.use('/node_modules',  express.static(__dirname + '/node_modules'));

require('./routes/routes.js')(app, passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!");
})

app.listen(CONFIG.port, function () { 
    console.log('Node server running @ http://localhost:' + CONFIG.port);
})
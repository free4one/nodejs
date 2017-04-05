var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var fs = require("fs");

app.set('views', __dirname + '/views');
app.set('views engine', 'ejs');
app.engine('html', require("ejs").renderFile);

var server = app.listen(process.env.PORT, function() {
    console.log("Express server has started on port " + process.env.PORT)
});

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(session({
    secret: '@#@MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));

var router = require('./router/main')(app, fs);

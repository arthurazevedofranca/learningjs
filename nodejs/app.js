
var express = require('express');
var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

require('./connection')();

require('./UserService')(app);

app.listen(3001);

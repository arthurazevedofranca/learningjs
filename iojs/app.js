'use strict';

let express = require('express');
let app = express();

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

require('./connection')();

require('./UserService')(app);

app.listen(3000);

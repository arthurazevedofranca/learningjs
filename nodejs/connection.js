
var Connection = function () {
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/learningnodejs');
};

module.exports = Connection

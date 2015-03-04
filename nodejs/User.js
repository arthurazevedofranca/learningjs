var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema
({
	name: String,
	type: String,
}, { collection: 'users' });

var User = mongoose.model('User', UserSchema);

module.exports = User;

'use strict';

var _ = require('underscore');
var co = require('co');
var User = require('./User');

class UserService {
	constructor (app) {
		app.get('/users', function (req, res) {
			co(function *() {
				let users = yield User.find();
				res.json(users);
			});
		});

		app.get('/users/:id', function (req, res) {
			co(function *() {
				let user = yield User.findById(req.params.id);
				res.json(user);
			});
		});

		app.post('/users', function (req, res) {
			co(function *() {
				let user = new User(req.body);
				yield user.save();
				res.json(user);
			});
		});

		app.put('/users/:id', function (req, res) {
			co(function *() {
				let user = yield User.findById(req.params.id);
				_(user.attributes).extend(req.body);
				yield user.save();
				res.json(user);
			});
		});

		app.delete('/users/:id', function (req, res) {
			co(function *() {
				yield User.remove({ _id: req.params.id });
				res.json({ status: 'OK' });
			});
		});
	}
}

module.exports = UserService;

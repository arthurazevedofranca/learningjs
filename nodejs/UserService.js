'use strict';

var _ = require('underscore');
var User = require('./User');

var UserService = function (app) {
	app.get('/users', function (req, res) {
			User.find().exec().then(function (users) {
			res.json(users);
		});
	});

	app.get('/users/:id', function (req, res) {
		User.findById(req.params.id).exec().then(function(user) {
			res.json(user);
		});
	});

	app.post('/users', function (req, res) {
		User.create(req.body).then(function(user) {
			res.json(user);
		});
	});

	app.put('/users/:id', function (req, res) {
		User.findByIdAndUpdate(req.params.id, req.body).exec().then(function(user) {
			res.json(user);
		});
	});

	app.delete('/users/:id', function (req, res) {
		User.findByIdAndRemove(req.params.id).exec().then(function () {
			res.json({ status: 'OK' });
		});
	});
};

module.exports = UserService;

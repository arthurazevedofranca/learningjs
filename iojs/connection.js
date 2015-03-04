'use strict';

class Connection {
	constructor () {
		let Mongorito = require('mongorito');
		Mongorito.connect('localhost/learningiojs');
	}
}

module.exports = Connection

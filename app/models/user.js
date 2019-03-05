var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		// username: { type: String, unique:true,dropDups: true },
		username: String,
		password: String
	}
});

module.exports = mongoose.model('User', userSchema);
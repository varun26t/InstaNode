var mongoose = require('mongoose');

var imageSchema = mongoose.Schema({
	username:{
		type String,
		required: true
	},
	baseurl:{
		type String,
		required: true
	},
	fullpath:{
		type String,
		required: true
	},
	actualpath:{
		type String,
		required: true
	}
});

var image = module.exports = mongoose.model('image', imageSchema);

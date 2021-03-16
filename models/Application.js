const mongoose = require('mongoose')

const appSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	identifier: {
		type: String,
		required: true,
	},
	devName: {
		type: String,
		required: true,
	},
	vulpixScore: {
		type: Number,
		required: true,
	},
	iconUrl: {
		type: String,
		required: false,
	},
	category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
})

module.exports = mongoose.model('App', appSchema)

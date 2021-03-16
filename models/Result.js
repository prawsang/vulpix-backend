const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
	application: { type: mongoose.Schema.Types.ObjectId, ref: 'App' },
	version: {
		type: String,
		required: true,
	},
	androidVersion: {
		type: String,
		required: true,
	},
	vulpixScore: {
		type: Number,
		required: true,
	},
	dateAdded: {
		type: Date,
		required: true,
	},
	pi: new mongoose.Schema({
		advertiserId: {
			type: Boolean,
			required: true,
		},
		androidId: {
			type: Boolean,
			required: true,
		},
		deviceSerialNumber: {
			type: Boolean,
			required: true,
		},
		googleServicesId: {
			type: Boolean,
			required: true,
		},
		imei: {
			type: Boolean,
			required: true,
		},
		macAddress: {
			type: Boolean,
			required: true,
		},
		cellId: {
			type: Boolean,
			required: true,
		},
		simSerialNumber: {
			type: Boolean,
			required: true,
		},
		imsi: {
			type: Boolean,
			required: true,
		},
		localAreaCode: {
			type: Boolean,
			required: true,
		},
		phoneNumber: {
			type: Boolean,
			required: true,
		},
		age: {
			type: Boolean,
			required: true,
		},
		audioRecording: {
			type: Boolean,
			required: true,
		},
		calendar: {
			type: Boolean,
			required: true,
		},
		contactBook: {
			type: Boolean,
			required: true,
		},
		country: {
			type: Boolean,
			required: true,
		},
		ccv: {
			type: Boolean,
			required: true,
		},
		dob: {
			type: Boolean,
			required: true,
		},
		email: {
			type: Boolean,
			required: true,
		},
		gender: {
			type: Boolean,
			required: true,
		},
		name: {
			type: Boolean,
			required: true,
		},
		password: {
			type: Boolean,
			required: true,
		},
		photo: {
			type: Boolean,
			required: true,
		},
		physicalAddress: {
			type: Boolean,
			required: true,
		},
		relationshipStatus: {
			type: Boolean,
			required: true,
		},
		sms: {
			type: Boolean,
			required: true,
		},
		ssn: {
			type: Boolean,
			required: true,
		},
		timezone: {
			type: Boolean,
			required: true,
		},
		username: {
			type: Boolean,
			required: true,
		},
		video: {
			type: Boolean,
			required: true,
		},
		webBrowsingLog: {
			type: Boolean,
			required: true,
		},
		gps: {
			type: Boolean,
			required: true,
		},
	}),
})

module.exports = mongoose.model('Result', resultSchema)

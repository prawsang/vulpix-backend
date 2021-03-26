const Result = require('../models/Result')
const { errorResponse } = require('../utils/error')

const addResult = async (req, res) => {
	// gather body data
	const {
		applicationId,
		version,
		androidVersion,
		vulpixScore,
		// PI
		advertiserId,
		androidId,
		deviceSerialNumber,
		googleServicesId,
		imei,
		macAddress,
		cellId,
		simSerialNumber,
		imsi,
		localAreaCode,
		phoneNumber,
		age,
		audioRecording,
		calendar,
		contactBook,
		country,
		ccv,
		dob,
		email,
		gender,
		name,
		password,
		photo,
		physicalAddress,
		relationshipStatus,
		sms,
		ssn,
		timezone,
		username,
		video,
		webBrowsingLog,
		gps,
	} = req.body

	await Result.create({
		applicationId,
		version,
		androidVersion,
		vulpixScore,
		// PI
		advertiserId,
		androidId,
		deviceSerialNumber,
		googleServicesId,
		imei,
		macAddress,
		cellId,
		simSerialNumber,
		imsi,
		localAreaCode,
		phoneNumber,
		age,
		audioRecording,
		calendar,
		contactBook,
		country,
		ccv,
		dob,
		email,
		gender,
		name,
		password,
		photo,
		physicalAddress,
		relationshipStatus,
		sms,
		ssn,
		timezone,
		username,
		video,
		webBrowsingLog,
		gps,
	})
		.then((rows) => res.send(rows))
		.catch((err) => res.status(500).json(errorResponse(err)))
}

module.exports = {
	addResult,
}
const { Op, HostNotFoundError } = require('sequelize')
const Result = require('../models/Result')
const { errorResponse } = require('../utils/error')
const { calculateScore } = require('../utils/score')
const { TESTING_METHOD } = require('../utils/testingMethods')

const addResult = async (req, res) => {
	// gather body data
	const {
		applicationId,
		version,
		androidVersion,
		testingMethod,
		error,
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

	let scoreInput = {
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
	}

	let vulpixScore = 0
	let newTestingMethod = testingMethod

	const formerResult = await Result.findOne({
		where: {
			applicationId,
			version,
			testingMethod: {
				[Op.not]: TESTING_METHOD.OLD,
			},
		},
	})
	if (!error) {
		if (formerResult) {
			const { dataValues } = formerResult
			// UNION
			scoreInput = {
				advertiserId: dataValues.advertiserId || advertiserId,
				androidId: dataValues.androidId || androidId,
				deviceSerialNumber:
					dataValues.deviceSerialNumber || deviceSerialNumber,
				googleServicesId:
					dataValues.googleServicesId || googleServicesId,
				imei: dataValues.imei || imei,
				macAddress: dataValues.macAddress || macAddress,
				cellId: dataValues.cellId || cellId,
				simSerialNumber: dataValues.simSerialNumber || simSerialNumber,
				imsi: dataValues.imsi || imsi,
				localAreaCode: dataValues.localAreaCode || localAreaCode,
				phoneNumber: dataValues.phoneNumber || phoneNumber,
				age: dataValues.age || age,
				audioRecording: dataValues.audioRecording || audioRecording,
				calendar: dataValues.calendar || calendar,
				contactBook: dataValues.contactBook || contactBook,
				country: dataValues.country || country,
				ccv: dataValues.ccv || ccv,
				dob: dataValues.dob || dob,
				email: dataValues.email || email,
				gender: dataValues.gender || gender,
				name: dataValues.name || name,
				password: dataValues.password || password,
				photo: dataValues.photo || photo,
				physicalAddress: dataValues.physicalAddress || physicalAddress,
				relationshipStatus:
					dataValues.relationshipStatus || relationshipStatus,
				sms: dataValues.sms || sms,
				ssn: dataValues.ssn || ssn,
				timezone: dataValues.timezone || timezone,
				username: dataValues.username || username,
				video: dataValues.video || video,
				webBrowsingLog: dataValues.webBrowsingLog || webBrowsingLog,
				gps: dataValues.gps || gps,
			}

			if (
				formerResult.dataValues.testingMethod !==
				TESTING_METHOD.COMPLETE
			) {
				if (
					(formerResult.dataValues.testingMethod ===
						TESTING_METHOD.DYNAMIC_ONLY &&
						testingMethod === TESTING_METHOD.STATIC_ONLY) ||
					(formerResult.dataValues.testingMethod ===
						TESTING_METHOD.STATIC_ONLY &&
						testingMethod === TESTING_METHOD.DYNAMIC_ONLY)
				) {
					newTestingMethod = TESTING_METHOD.COMPLETE
				}
			} else {
				newTestingMethod = TESTING_METHOD.COMPLETE
			}
		}

		vulpixScore = calculateScore(scoreInput)
	}

	if (formerResult) {
		await Result.update(
			{
				applicationId,
				version,
				androidVersion,
				vulpixScore,
				testingMethod: newTestingMethod,
				error,
				// PI
				...scoreInput,
			},
			{
				where: {
					applicationId,
					version,
				},
			},
		)
			.then((rows) => res.send(rows))
			.catch((err) => res.status(500).json(errorResponse(err)))
	} else {
		await Result.create({
			applicationId,
			version,
			androidVersion,
			vulpixScore,
			testingMethod: newTestingMethod,
			error,
			// PI
			...scoreInput,
		})
			.then((rows) => res.send(rows))
			.catch((err) => res.status(500).json(errorResponse(err)))
	}
}

module.exports = {
	addResult,
}

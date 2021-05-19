const Sequelize = require('sequelize')
const db = require('../config/db')
const { errorResponse } = require('../utils/error')

const byScore = async (req, res) => {
	const { category, order, limit } = req.query
	try {
		const results = await db.query(
			`SELECT * from apps INNER
		JOIN (
			SELECT DISTINCT ON ("applicationId") results."vulpixScore", "applicationId" 
			FROM results ORDER BY "applicationId" ASC, "createdAt" DESC
		) temp ON apps."identifier" = temp."applicationId" 
		${category ? `WHERE apps."categorySlug" = $categorySlug` : ''} 
		ORDER BY "vulpixScore" ${order === 'asc' ? 'ASC' : 'DESC'}
		LIMIT $limit`,
			{
				bind: {
					categorySlug: category,
					limit: limit || '100',
				},
				type: Sequelize.QueryTypes.SELECT,
			},
		)
		res.send(results)
	} catch (err) {
		res.status(500).json(errorResponse(err))
	}
}

const mostViewed = async (req, res) => {
	try {
		const results = await db.query(
			`SELECT * FROM applications ORDER BY views LIMIT 100`,
		)
		res.send(results)
	} catch (err) {
		res.status(500).json(errorResponse(err))
	}
}

const mostLeakedCriterion = async (req, res) => {
	try {
		const results = await db.query(
			`SELECT results."advertiserId", "androidId", "deviceSerialNumber", 
			"googleServicesId", "imei", "macAddress", "cellId", "simSerialNumber", 
			"imsi", "localAreaCode", "phoneNumber", "age", "audioRecording", "calendar", 
			"contactBook", "country", "ccv", "dob", "email", "gender", "name", "password", 
			"photo", "physicalAddress", "relationshipStatus", "sms", "ssn", "timezone", 
			"username", "video", "webBrowsingLog", "gps" FROM results`,
		)

		const count = {
			advertiserId: 0,
			androidId: 0,
			deviceSerialNumber: 0,
			googleServicesId: 0,
			imei: 0,
			macAddress: 0,
			cellId: 0,
			simSerialNumber: 0,
			imsi: 0,
			localAreaCode: 0,
			phoneNumber: 0,
			age: 0,
			audioRecording: 0,
			calendar: 0,
			contactBook: 0,
			country: 0,
			ccv: 0,
			dob: 0,
			email: 0,
			gender: 0,
			name: 0,
			password: 0,
			photo: 0,
			physicalAddress: 0,
			relationshipStatus: 0,
			sms: 0,
			ssn: 0,
			timezone: 0,
			username: 0,
			video: 0,
			webBrowsingLog: 0,
			gps: 0,
		}

		if (results) {
			const data = results[0]
			data.forEach((row) => {
				Object.keys(row).forEach((criterion) => {
					if (row[criterion]) count[criterion] += 1
				})
			})
		}
		res.send(count)
	} catch (err) {
		res.status(500).json(errorResponse(err))
	}
}

const mostLeakingCategory = async (req, res) => {
	try {
		const result = await db.query(`
			SELECT "categorySlug", AVG("vulpixScore")
			FROM apps 
			JOIN results ON "identifier" = "applicationId"
			GROUP BY "categorySlug"
		`)
		res.send(result[0])
	} catch (err) {
		res.status(500).json(errorResponse(err))
	}
}

const countLeakingAppsByCategory = async (req, res) => {
	try {
		const result = await db.query(`
			SELECT apps."categorySlug", count(*) FROM apps
			JOIN results ON apps."identifier" = results."applicationId"
			WHERE results."vulpixScore" >= 75
			GROUP BY "categorySlug"
		`)
		res.send(result[0])
	} catch (err) {
		res.status(500).json(errorResponse(err))
	}
}

module.exports = {
	byScore,
	mostViewed,
	mostLeakedCriterion,
	mostLeakingCategory,
	countLeakingAppsByCategory,
}

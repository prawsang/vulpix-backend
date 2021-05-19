const Sequelize = require('sequelize')
const db = require('../config/db')
const Application = require('../models/Application')
const Result = require('../models/Result')
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

module.exports = {
	byScore,
	mostViewed,
}

const Sequelize = require('sequelize')
const db = require('../config/db')
const Application = require('../models/Application')
const Result = require('../models/Result')
const { errorResponse } = require('../utils/error')

const byScore = async (req, res) => {
	const { category, order } = req.query
	try {
		const results = await db.query(
			`SELECT * from apps INNER
		JOIN (
			SELECT DISTINCT ON ("applicationId") results."vulpixScore", "applicationId" 
			FROM results ORDER BY "applicationId" ASC, "createdAt" DESC
		) temp ON apps."identifier" = temp."applicationId" 
		${category ? `WHERE apps."categorySlug" = $categorySlug` : ''} 
		ORDER BY "vulpixScore" ${order === 'asc' ? 'ASC' : 'DESC'}
		LIMIT 100`,
			{
				bind: {
					categorySlug: category,
				},
				type: Sequelize.QueryTypes.SELECT,
			},
		)
		res.send(results)
	} catch (err) {
		res.status(500).json(errorResponse(err))
	}
}

module.exports = {
	byScore,
}

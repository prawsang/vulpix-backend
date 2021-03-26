const Application = require('../models/Application')
const Result = require('../models/Result')
const Category = require('../models/Category')
const { errorResponse } = require('../utils/error')

// Get results of an application
const getAResult = async (req, res) => {
	const { identifier } = req.query

	await Application.findOne({
		where: {
			identifier: identifier,
		},
		include: [
			{
				model: Result,
			},
			{
				model: Category,
			},
		],
	})
		.then((result) => {
			res.send(result)
		})
		.catch((err) => console.log(err))
	// .catch((err) => res.status(500).json(errorResponse(err)))
}

module.exports = {
	getAResult,
}

const Application = require('../models/Application')
const { errorResponse } = require('../utils/error')

const addApplication = async (req, res) => {
	const { identifier } = req.body

	await Application.create({
		identifier,
	})
		.then((rows) => res.send(rows))
		.catch((err) => res.status(500).json(errorResponse(err)))
}

const editApplication = async (req, res) => {
	const { identifier, name, devName, iconUrl, categorySlug } = req.body

	await Application.update(
		{
			name,
			devName,
			iconUrl,
			categorySlug,
		},
		{
			where: {
				identifier: identifier,
			},
		},
	)
		.then((rows) => res.send(rows))
		.catch((err) => res.status(500).json(errorResponse(err)))
}

module.exports = {
	addApplication,
	editApplication,
}

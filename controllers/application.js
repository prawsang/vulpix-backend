const Application = require('../models/Application')
const { errorResponse } = require('../utils/error')

const addApplication = async (req, res) => {
	const { identifier, name, devName, categorySlug } = req.body

	await Application.create({
		identifier,
		name,
		devName,
		categorySlug,
		views: 0,
	})
		.then((rows) => res.send(rows))
		.catch((err) => res.status(500).json(errorResponse(err)))
}

const editApplication = async (req, res) => {
	const { identifier, name, devName, categorySlug } = req.body

	await Application.update(
		{
			name,
			devName,
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

const viewApplication = async (req, res) => {
	const { identifier } = req.body

	await Application.increment('views', { by: 1, where: { identifier } })
		.then((rows) => res.send(rows))
		.catch((err) => res.status(500).json(errorResponse(err)))
}

module.exports = {
	addApplication,
	editApplication,
	viewApplication,
}

const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Application = require('../models/Application')
const { errorResponse } = require('../utils/error')

const addApplication = async (req, res) => {
	console.log(req.body)
	const { identifier } = req.body

	await Application.create({
		identifier,
	})
		.then((rows) => res.send(rows))
		.catch((err) => res.status(500).json(errorResponse(err)))
}

const editApplication = async (req, res) => {
	const {
		identifier,
		name,
		devName,
		vulpixScore,
		iconUrl,
		categoryId,
	} = req.body

	await Application.update(
		{
			name,
			devName,
			vulpixScore,
			iconUrl,
			categoryId,
		},
		{
			where: {
				identifier: {
					[Op.eq]: identifier,
				},
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

const { Op } = require('sequelize')
const Application = require('../models/Application')
const Result = require('../models/Result')
const Category = require('../models/Category')
const { errorResponse } = require('../utils/error')
const { paginate } = require('../utils/pagination')

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
		.catch((err) => res.status(500).json(errorResponse(err)))
}

// Get all categories
const getCategories = async (req, res) => {
	await Category.findAll({
		order: [['name']],
	})
		.then((result) => {
			res.send(result)
		})
		.catch((err) => res.status(500).json(errorResponse(err)))
}

// Search Apps
const searchApps = async (req, res) => {
	const { page, limit, searchTerm } = req.query
	const appsPage = await paginate({
		model: Application,
		params: {
			where: {
				[Op.or]: [
					{
						identifier: {
							[Op.substring]: searchTerm,
						},
					},
					{
						name: {
							[Op.substring]: searchTerm,
						},
					},
					{
						devName: {
							[Op.substring]: searchTerm,
						},
					},
				],
			},
			include: [
				{
					model: Result,
					attributes: ['vulpixScore'],
					order: [['createdAt', 'DESC']],
					limit: 1,
				},
			],
		},
		page,
		limit,
	})

	if (appsPage.errors) {
		res.status(500).json(errorResponse(appsPage.errors))
		return
	}
	res.json(appsPage)
}

// Get apps in category :D
const getAppsInCategory = async (req, res) => {
	const { categorySlug } = req.params
	const { page, limit } = req.query

	const appsPage = await paginate({
		model: Application,
		params: {
			where: {
				categorySlug: categorySlug,
			},
			include: [
				{
					model: Result,
					attributes: ['vulpixScore'],
					order: [['createdAt', 'DESC']],
					limit: 1,
				},
			],
		},
		page,
		limit,
	})

	if (appsPage.errors) {
		res.status(500).json(errorResponse(appsPage.errors))
		console.log(appsPage.errors)
		return
	}
	res.json(appsPage)
}

module.exports = {
	getAResult,
	getCategories,
	getAppsInCategory,
	searchApps,
}

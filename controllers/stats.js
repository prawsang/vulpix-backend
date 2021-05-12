const Sequelize = require('sequelize')
const Application = require('../models/Application')
const Result = require('../models/Result')
const { paginate } = require('../utils/pagination')

const byScore = async (req, res) => {
	const { category, page, limit } = req.query
	Application.findAll({})
		.then((result) => res.send(result))
		.catch((err) => console.log(err))
}

module.exports = {
	byScore,
}

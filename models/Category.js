const Sequelize = require('sequelize')
const db = require('../config/db')

const Category = db.define('categories', {
	slug: {
		primaryKey: true,
		type: Sequelize.STRING,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
})

module.exports = Category

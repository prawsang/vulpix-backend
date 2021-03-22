const Sequelize = require('sequelize')
const db = require('../config/db')

const Category = db.define('categories', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
})

module.exports = Category

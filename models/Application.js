const Sequelize = require('sequelize')
const db = require('../config/db')
const Category = require('./Category')

const App = db.define('apps', {
	identifier: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING,
		required: true,
	},
	devName: {
		type: Sequelize.STRING,
	},
	vulpixScore: {
		type: Sequelize.INTEGER,
	},
	iconUrl: {
		type: Sequelize.STRING,
	},
	categoryId: {
		type: Sequelize.INTEGER,
	},
})

App.belongsTo(Category, {
	foreignKey: 'categoryId',
	as: 'category',
})

module.exports = App

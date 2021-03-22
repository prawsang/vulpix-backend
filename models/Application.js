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
		allowNull: false,
	},
	devName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	vulpixScore: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	iconUrl: {
		type: Sequelize.STRING,
	},
	categoryId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
})

App.belongsTo(Category, {
	foreignKey: 'categoryId',
	as: 'category',
})

module.exports = App

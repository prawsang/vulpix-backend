const Sequelize = require('sequelize')
const db = require('../config/db')
const Category = require('./Category')
const Result = require('./Result')

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
	iconUrl: {
		type: Sequelize.STRING,
	},
	categorySlug: {
		type: Sequelize.STRING,
	},
	views: {
		type: Sequelize.INTEGER,
	},
})

App.belongsTo(Category, {
	foreignKey: 'categorySlug',
})

App.hasMany(Result, {
	foreignKey: 'applicationId',
})

module.exports = App

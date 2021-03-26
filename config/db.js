const Sequelize = require('sequelize')
module.exports = new Sequelize(`${process.env.DATABASE_URL}?sslmode=require`, {
	host: 'localhost',
	dialect: 'postgres',
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false, // <<<<<< YOU NEED THIS
		},
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
})

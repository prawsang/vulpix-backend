const Sequelize = require('sequelize')
//postgres:vulpix@localhost:5432/vulpix?sslmode=require
postgres: module.exports = new Sequelize(
	process.env.DATABASE_URL ||
		`postgres://postgres:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
	{
		host: process.env.DB_HOST,
		dialect: 'postgres',
		// dialectOptions: {
		// 	ssl: {
		// 		require: true,
		// 		rejectUnauthorized: false, // <<<<<< YOU NEED THIS
		// 	},
		// },
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
)

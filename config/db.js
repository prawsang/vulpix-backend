const Sequelize = require('sequelize')
//postgres:vulpix@localhost:5432/vulpix?sslmode=require
module.exports = new Sequelize(
	`${process.env.DATABASE_URL}${process.env.SSL ? '?sslmode=require' : ''}` ||
		`postgres://postgres:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
	{
		host: process.env.DB_HOST,
		dialect: 'postgres',
		dialectOptions: {
			ssl: process.env.SSL
				? {
						require: true,
						rejectUnauthorized: false, // <<<<<< YOU NEED THIS
				  }
				: undefined,
		},
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
)

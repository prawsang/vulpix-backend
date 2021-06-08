module.exports = {
	development: {
		username: 'postgres',
		password: process.env.DB_PASSWORD,
		database: 'vulpix_dev',
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
	test: {
		username: 'postgres',
		password: process.env.DB_PASSWORD,
		database: 'vulpix_test',
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
	production: {
		username: 'postgres',
		password: process.env.DB_PASSWORD,
		database: 'vulpix_prod',
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
}

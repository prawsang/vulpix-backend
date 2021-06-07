module.exports = {
	development: {
		username: 'postgres',
		password: 'postgres',
		database: 'vulpix_dev',
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
	test: {
		username: 'postgres',
		password: 'postgres',
		database: 'vulpix_test',
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
	production: {
		username: 'postgres',
		password: 'postgres',
		database: 'vulpix_prod',
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
}

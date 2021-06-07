'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await queryInterface.createTable('apps', {
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
			categorySlug: {
				type: Sequelize.STRING,
			},
			views: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
		})

		await queryInterface.createTable('categories', {
			slug: {
				primaryKey: true,
				type: Sequelize.STRING,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
		})

		await queryInterface.createTable('results', {
			applicationId: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false,
			},
			version: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false,
			},
			androidVersion: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			error: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			vulpixScore: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			testingMethod: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			// PI
			advertiserId: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			androidId: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			deviceSerialNumber: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			googleServicesId: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			imei: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			macAddress: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			cellId: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			simSerialNumber: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			imsi: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			localAreaCode: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			phoneNumber: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			age: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			audioRecording: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			calendar: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			contactBook: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			country: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			ccv: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			dob: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			email: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			gender: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			name: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			password: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			photo: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			physicalAddress: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			relationshipStatus: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			sms: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			ssn: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			timezone: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			username: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			video: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			webBrowsingLog: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			gps: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
		})
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		await queryInterface.dropTable('apps')
		await queryInterface.dropTable('categories')
		await queryInterface.dropTable('results')
	},
}

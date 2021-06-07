'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		return queryInterface.bulkInsert('categories', [
			{
				slug: 'android-wear',
				name: 'Wear OS',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'art-and-design',
				name: 'Art & Design',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'auto-and-vehicles',
				name: 'Auto & Vehicles',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'beauty',
				name: 'Beauty',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'books-and-reference',
				name: 'Books & Reference',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'business',
				name: 'Business',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'comics',
				name: 'Comics',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'communication',
				name: 'Communication',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'dating',
				name: 'Dating',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'education',
				name: 'Education',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'entertainment',
				name: 'Entertainment',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'events',
				name: 'Events',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'finance',
				name: 'Finance',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'food-and-drink',
				name: 'Food & Drink',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'health-and-fitness',
				name: 'Health & Fitness',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'house-and-home',
				name: 'House & Home',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'libraries-and-demo',
				name: 'Libraries & Demo',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'lifestyle',
				name: 'Lifestyle',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'maps-and-navigation',
				name: 'Maps & Navigation',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'medical',
				name: 'Medical',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'music-and-audio',
				name: 'Music & Audio',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'news-and-magazines',
				name: 'News & Magazines',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'parenting',
				name: 'Parenting',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'personalization',
				name: 'Personalization',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'photography',
				name: 'Photography',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'productivity',
				name: 'Productivity',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'shopping',
				name: 'Shopping',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'social',
				name: 'Social',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'sports',
				name: 'Sports',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'tools',
				name: 'Tools',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'travel-and-local',
				name: 'Travel & Local',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'unknown',
				name: 'Unknown',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'video-players',
				name: 'Video Players & Editors',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
			{
				slug: 'weather',
				name: 'Weather',
				createdAt: '2021-03-27 05:26:12.675+07',
				updatedAt: '2021-03-27 05:26:12.675+07',
			},
		])
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete('categories', null, {})
	},
}

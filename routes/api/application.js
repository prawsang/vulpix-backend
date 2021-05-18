const express = require('express')
const router = express.Router()
const {
	addApplication,
	editApplication,
	viewApplication,
} = require('../../controllers/application')

// Add an application without results to the database
router.post('/', addApplication)

// Add more information to the application afterwards
router.put('/', editApplication)

// When an application is viewed
router.post('/view', viewApplication)

module.exports = router

const express = require('express')
const router = express.Router()
const {
	addApplication,
	editApplication,
} = require('../../controllers/application')

// Add an application without results to the database
router.post('/', addApplication)

// Add more information to the application afterwards
router.put('/', editApplication)

module.exports = router

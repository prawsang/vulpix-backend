const express = require('express')
const router = express.Router()
const { addApplication } = require('../../controllers/application')

// Add an application with or without results to the database
router.post('/', addApplication)

module.exports = router

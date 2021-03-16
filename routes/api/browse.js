const express = require('express')
const router = express.Router()
const Application = require('../../models/Application')
const { errorResponse } = require('../../utils/error')

// Sample API
router.get('/all', async (req, res) => {
	try {
		const applications = await Application.find()
		res.json(applications)
	} catch (err) {
		res.status(500).json(errorResponse(err))
	}
})

module.exports = router

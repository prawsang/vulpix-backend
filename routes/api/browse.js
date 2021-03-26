const express = require('express')
const router = express.Router()
const Application = require('../../models/Application')
const { errorResponse } = require('../../utils/error')

const { getAResult } = require('../../controllers/browse')

// Sample API
router.get('/all', async (req, res) => {
	try {
		const applications = await Application.findAll()
		res.json(applications)
	} catch (err) {
		res.status(500).json(errorResponse(err))
	}
})

router.get('/application', getAResult)

module.exports = router

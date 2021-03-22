const express = require('express')
const router = express.Router()
const { addResult } = require('../../controllers/result')

// Add an results after testing
router.post('/', addResult)

module.exports = router

const express = require('express')
const router = express.Router()
const { byScore } = require('../../controllers/stats')

router.get('/by-score', byScore)

module.exports = router

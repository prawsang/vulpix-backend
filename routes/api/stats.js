const express = require('express')
const router = express.Router()
const { byScore, mostViewed } = require('../../controllers/stats')

router.get('/by-score', byScore)
router.get('/by-views', mostViewed)

module.exports = router

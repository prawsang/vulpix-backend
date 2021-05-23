const express = require('express')
const router = express.Router()
const cacheMiddleware = require('../../middlewares/cache')
const {
	byScore,
	mostViewed,
	mostLeakedCriterion,
	mostLeakingCategory,
} = require('../../controllers/stats')

router.get('/by-score', cacheMiddleware(900), byScore)
router.get('/by-views', mostViewed)
router.get('/by-criterion', cacheMiddleware(900), mostLeakedCriterion)
router.get('/by-category', cacheMiddleware(900), mostLeakingCategory)

module.exports = router

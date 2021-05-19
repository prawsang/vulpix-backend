const express = require('express')
const router = express.Router()
const {
	byScore,
	mostViewed,
	mostLeakedCriterion,
	mostLeakingCategory,
	countLeakingAppsByCategory,
} = require('../../controllers/stats')

router.get('/by-score', byScore)
router.get('/by-views', mostViewed)
router.get('/by-criterion', mostLeakedCriterion)
router.get('/by-category', mostLeakingCategory)
router.get('/category-count', countLeakingAppsByCategory)

module.exports = router

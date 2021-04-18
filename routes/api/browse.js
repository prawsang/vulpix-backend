const express = require('express')
const router = express.Router()
const {
	getAResult,
	getCategories,
	getAppsInCategory,
	searchApps,
} = require('../../controllers/browse')

router.get('/application', getAResult)
router.get('/categories/', getCategories)
router.get('/search', searchApps)
router.get('/category/:categorySlug', getAppsInCategory)

module.exports = router

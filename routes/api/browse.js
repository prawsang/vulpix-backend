const express = require('express')
const router = express.Router()
const {
	getAResult,
	getCategories,
	getAppsInCategory,
} = require('../../controllers/browse')

router.get('/application', getAResult)
router.get('/categories/', getCategories)
router.get('/category/:categorySlug', getAppsInCategory)

module.exports = router

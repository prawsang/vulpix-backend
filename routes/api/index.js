const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.sendStatus(200))

const applicationRouter = require('./application')
const browseRouter = require('./browse')
router.use('/application', applicationRouter)
router.use('/browse', browseRouter)

module.exports = router

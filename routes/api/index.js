const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.sendStatus(200))

const applicationRouter = require('./application')
const browseRouter = require('./browse')
const resultRouter = require('./result')
const statsRouter = require('./stats')
router.use('/application', applicationRouter)
router.use('/browse', browseRouter)
router.use('/result', resultRouter)
router.use('/stats', statsRouter)

module.exports = router

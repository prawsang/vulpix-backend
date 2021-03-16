const dotenv = require('dotenv')

const envFile = process.env.NODE_ENV ? `${process.env.NODE_ENV}.env` : '.env'
dotenv.config({ path: envFile })

const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use('/api', require('./routes'))

// connect db
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const server = app.listen(5000, () => console.log('server started'))

module.exports = server

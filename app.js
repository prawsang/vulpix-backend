const express = require('express')
const dotenv = require('dotenv')
const db = require('./config/db')

// const Result = require('./models/Result')

const envFile = process.env.NODE_ENV ? `${process.env.NODE_ENV}.env` : '.env'
dotenv.config({ path: envFile })

db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.log(err))

// db.sync({ force: true })

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./routes'))

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () =>
	console.log(`server started on port ${PORT}`),
)
module.exports = server

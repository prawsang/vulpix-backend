const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const envFile = process.env.NODE_ENV ? `${process.env.NODE_ENV}.env` : '.env'
dotenv.config({ path: envFile })

const db = require('./config/db')
db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.log(err))

// db.sync()

const app = express()
// app.use(cors())
app.use(cors('https://vulpix2.herokuapp.com/'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./routes'))

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () =>
	console.log(`server started on port ${PORT}`),
)
module.exports = server

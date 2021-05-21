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

const whitelist = [
	'https://vulpix2.herokuapp.com/',
	'http://vulpix2.herokuapp.com/',
]
const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	},
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./routes'))

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () =>
	console.log(`server started on port ${PORT}`),
)
module.exports = server

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const envFile = process.env.NODE_ENV ? `${process.env.NODE_ENV}.env` : '.env'
dotenv.config({ path: envFile })

const db = require('./config/db')

const connectDb = async () => {
	let retries = 5
	while (retries) {
		try {
			await db.authenticate()
			console.log('Database Connected...')
			break
		} catch (err) {
			console.log(err)
			retries -= 1
			console.log(`retries left: ${retries}`)
			await new Promise((res) => setTimeout(res, 5000))
		}
	}
}
connectDb()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./routes'))

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () =>
	console.log(`server started on port ${PORT}`),
)
module.exports = server

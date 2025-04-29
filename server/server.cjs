const express = require('express')
const mongoose = require('mongoose')
const CardModel = require('./model/Card.cjs')
const cors = require('cors')
const { ObjectId } = require('mongodb')

const app = express()

app.use(express.json())
app.use(cors())

require('dotenv').config()
const dbLink = process.env.DB_LINK

mongoose.connect(dbLink.toString(), {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

mongoose.connection.on('error', err => {
	console.error('MongoDB connection error:', err)
})

mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB')
})

app.get('/getCards', async (req, res) => {
	try {
		const cards = await CardModel.find()
		res.json(cards)
	} catch (error) {
		console.error('Error fetching cards:', error)
		res.status(500).json({ error: 'Server Error' })
	}
})

app.listen(3002, () => {
	console.log('server is running')
})

app.post('/addCard', async (req, res) => {
	const card = req.body
	CardModel.insertMany(card)
		.then(result => {
			res.status(201).json(result)
		})
		.catch(err => {
			res.status(500).json({ err: 'Could not create card' })
		})
})

app.delete('/getCards/:id', async (req, res) => {
	console.log(req)
	CardModel.deleteOne({ _id: new ObjectId(req.params.id) })
		.then(result => {
			res.status(201).json(result)
		})
		.catch(err => {
			res.status(500).json({ err: 'Could not delete card' })
		})
})

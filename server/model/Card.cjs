const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema(
	{
		bankName: String,
		cardNumber: String,
		CVV: String,
		dateOfEnd: Date,
	},
	{ versionKey: false }
)

const CardModel = mongoose.model('Cards', CardSchema, 'Cards')
module.exports = CardModel

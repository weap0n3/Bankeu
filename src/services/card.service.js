import axios from 'axios'

export const CardService = {
	async getAll() {
		const response = await axios
			.get('http://localhost:3002/getCards')
			.catch(error => console.error(error))
		return response.data
	},
	async addCard(cardData) {
		const response = await axios
			.post('http://localhost:3002/addCard', cardData)
			.catch(error => console.error(error))
		return response.data[0]
	},
	async deleteCard(id) {
		await axios
			.delete(`http://localhost:3002/getCards/${id}`, id)
			.catch(error => console.log(error, id))
	},
}

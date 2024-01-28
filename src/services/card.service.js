import axios from 'axios'

export const CardService = {
	async getAll() {
		const response = await axios
			.get('http://localhost:3002/getCards')
			.catch(error => console.error(error))
		return response.data
	},
}

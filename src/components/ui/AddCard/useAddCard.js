import { useState } from 'react'
import { CardService } from '../../../services/card.service'
import { applyFormat } from './addCard-formats'

const clearData = {
	bankName: '',
	cardNumber: '',
	CVV: '',
	dateOfEnd: '',
}

export function useAddCard() {
	const [data, setData] = useState(clearData)

	const [isVisible, setIsVisible] = useState(false)

	const handleCVVFocus = () => {
		setIsVisible(true)
	}
	const handleCVVUnFocus = () => {
		setIsVisible(false)
	}

	const createCard = async e => {
		e.preventDefault()
		data.dateOfEnd = applyFormat(data.dateOfEnd, 'DateOfEnd')
		await CardService.addCard(data)
			.then(response => {
				console.log('successfully')
			})
			.catch(err => {
				console.log(err)
			})
		setData(clearData)
	}

	return {
		data,
		setData,
		isVisible,
		handleCVVFocus,
		handleCVVUnFocus,
		createCard,
	}
}

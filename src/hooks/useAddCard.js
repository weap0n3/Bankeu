import { useContext, useState } from 'react'
import { applyFormat } from '../components/ui/AddCard/addCard-formats'
import { CardContext } from '../providers/CardProvider'
import { CardService } from '../services/card.service'

const clearData = {
	bankName: '',
	cardNumber: '',
	CVV: '',
	dateOfEnd: '',
}

export function useAddCard() {
	const [data, setData] = useState(clearData)

	const { setCards } = useContext(CardContext)

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
		const response = await CardService.addCard(data)
		const newCard = {
			...data,
			_id: response._id,
			dateOfEnd: applyFormat(response.dateOfEnd, 'DateOfEndInput'),
		}
		setCards(prev => [...prev, newCard])
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

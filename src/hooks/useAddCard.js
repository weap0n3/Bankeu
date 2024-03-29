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
		await CardService.addCard(data).catch(err => {
			console.log(err)
		})
		setCards(prev => [...prev, data])
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

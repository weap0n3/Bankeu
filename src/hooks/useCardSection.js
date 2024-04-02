import { useState } from 'react'

export const useCardSection = () => {
	const [showAddCardForm, setShowAddCardForm] = useState(false)
	const [showRemoveCardForm, setShowRemoveCardForm] = useState(false)

	const handleShowAddCardForm = () => {
		setShowAddCardForm(true)
	}

	const handleCloseAddCardForm = () => {
		setShowAddCardForm(false)
	}

	const handleShowRemoveCardForm = () => {
		setShowRemoveCardForm(true)
	}

	const handleCloseRemoveCardForm = () => {
		setShowRemoveCardForm(false)
	}

	return {
		showAddCardForm,
		showRemoveCardForm,
		handleShowAddCardForm,
		handleCloseAddCardForm,
		handleShowRemoveCardForm,
		handleCloseRemoveCardForm,
	}
}

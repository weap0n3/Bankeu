import React, { createContext, useState, useEffect } from 'react'
import { CardService } from '../services/card.service'

export const CardContext = createContext()

const CardProvider = ({ children }) => {
	const [cards, setCards] = useState([])

	return (
		<CardContext.Provider value={{ cards, setCards }}>
			{children}
		</CardContext.Provider>
	)
}

export default CardProvider
